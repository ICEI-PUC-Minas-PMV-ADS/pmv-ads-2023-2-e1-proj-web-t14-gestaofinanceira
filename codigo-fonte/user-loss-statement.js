let dadosGrafico = [0, 0, 0, 0, 0, 0, 0, 0];
let seriesGrafico = {
    labels: ["Alimentação", "Contas", "Educação", "Emergência", "Lazer", "Investimentos", "Saúde", "Outros"],
    datasets: [
        {
            label: "Despesas",
            data: dadosGrafico,
            borderWidth: 1,
        },
    ],
};
let chart = new Chart(grafico, {
    type: "doughnut",
    data: seriesGrafico,
    options: {
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 1,
            },
        },
    },
});

// Desenha a tabela com os dados armazenados no localStorage
function mostraTabela() {
    // carrega dados
    let listadeDespesas = readDespesas();
    dados = listadeDespesas.filter(
        (t) =>
            filtro.value === "" ||
            t.descricao.toLowerCase().includes(filtro.value.toLowerCase())
    );

    // gera conteúdo da tabela
    let conteudo = "";
    dados.forEach((item) => {
        conteudo += `
        <tr id='linha-${item.id}'>
        <td class='selecao'>
          <input type="radio" name="campoSelecao" value="${item.id}" />
        </td>
        <td class="celula-1">
          ${item.descricao}
        </td>
        <td class="celula-2"> 
          ${categoria(item.categoria)}
        </td>
        <td class="celula-3"> 
          ${item.valor}
        </td>
        <td class="celula-4"> 
          ${formataData(item.data)}
        </td>
        <td></td>
      </tr>
    `;
    });
    corpoTabela.innerHTML = conteudo;

    // determina comportamento dos botões e outros componentes interativos
    let botoesSelecao = document.querySelectorAll("input[name=campoSelecao]");
    botoesSelecao.forEach((b) => {
        b.onclick = function (e) {
            btEditar.disabled = false;
            btExcluir.disabled = false;
        };
    });
    btAdicionar.disabled = false;
    btEditar.disabled = true;
    btExcluir.disabled = true;

    // atualiza gráfico de despesas por tipo
    dadosGrafico = [0, 0, 0, 0, 0, 0, 0, 0];
    dados.forEach((t) => (dadosGrafico[t.categoria - 1] += parseFloat(t.valor)));
    chart.data.datasets[0].data = dadosGrafico;
    chart.update();
}

// Mostra a janela modal para criação de nova despesa
btAdicionar.onclick = function () {
    campoDescricao.value = "";
    campoCategoria.value = "";
    campoValor.value = "";
    campoData.value = "";
    campoDescricao.disabled = false;
    campoCategoria.disabled = false;
    campoValor.disabled = false;
    campoData.disabled = false;
    boxDespesa.style.display = "block";
    btMTSalvar.style.display = "inline-block";
    btMTAlterar.style.display = "none";
    btMTExcluir.style.display = "none";
    btMTSalvar.disabled = true;
    campoDescricao.focus();
};

// Verifica se os três campos estão preenchidos antes de criar ou alterar despesa
let liberaBotaoMT = function () {
    if (
        campoDescricao.value.length > 0 &&
        campoCategoria.value.length > 0 &&
        campoValor.value.length > 0 &&
        campoData.value.length > 0
    ) {
        btMTSalvar.disabled = false;
        btMTAlterar.disabled = false;
    } else {
        btMTSalvar.disabled = true;
        btMTAlterar.disabled = true;
    }
};
campoDescricao.onkeyup = liberaBotaoMT;
campoCategoria.onchange = liberaBotaoMT;
campoValor.onchange = liberaBotaoMT;
campoData.onchange = liberaBotaoMT;

// Confirma a criação da despesa
btMTSalvar.onclick = function () {
    let despesa = {
        descricao: campoDescricao.value,
        categoria: campoCategoria.value,
        valor: campoValor.value,
        data: campoData.value,
    };
    createDespesa(despesa, mostraTabela);
    boxDespesa.style.display = "none";
};

// Mostra a janela modal para edição de uma despesa existente
btEditar.onclick = function () {
    let selecoes = Array.from(
        document.querySelectorAll("input[name=campoSelecao]")
    );
    let selecionado = selecoes.find((i) => i.checked == true);
    if (selecionado) {
        let despesa = readDespesa(selecionado.value);
        campoDescricao.value = despesa.descricao;
        campoCategoria.value = despesa.categoria;
        campoValor.value = despesa.valor;
        campoData.value = despesa.data;
        campoID.value = despesa.id;
        campoDescricao.disabled = false;
        campoCategoria.disabled = false;
        campoValor.disabled = false;
        campoData.disabled = false;
        boxDespesa.style.display = "block";
        btMTSalvar.style.display = "none";
        btMTAlterar.style.display = "inline-block";
        btMTExcluir.style.display = "none";
        btMTAlterar.disabled = false;
        campoDescricao.focus();
    }
};

// Confirma a alteração da despesa
btMTAlterar.onclick = function () {
    let despesaEditada = {
        id: campoID.value,
        descricao: campoDescricao.value,
        categoria: campoCategoria.value,
        valor: campoValor.value,
        data: campoData.value,
    };
    updateDespesa(despesaEditada);
    boxDespesa.style.display = "none";
    mostraTabela();
};

// Mostra a janela modal para exclusão de uma despesa existente
btExcluir.onclick = function () {
    let selecoes = Array.from(
        document.querySelectorAll("input[name=campoSelecao]")
    );
    let selecionado = selecoes.find((i) => i.checked == true);
    if (selecionado) {
        let despesa = readDespesa(selecionado.value);
        campoDescricao.value = despesa.descricao;
        campoCategoria.value = despesa.categoria;
        campoValor.value = despesa.valor;
        campoData.value = despesa.data;
        campoID.value = despesa.id;
        campoDescricao.disabled = true;
        campoCategoria.disabled = true;
        campoValor.disabled = true;
        campoData.disabled = true;
        boxDespesa.style.display = "block";
        btMTSalvar.style.display = "none";
        btMTAlterar.style.display = "none";
        btMTExcluir.style.display = "inline-block";
    }
};

// Confirma a exclusão da despesa
btMTExcluir.onclick = function () {
    deleteDespesa(campoID.value);
    boxDespesa.style.display = "none";
    mostraTabela();
};

// Cancela a criação, alteração ou exclusão da despesa
btMTCancelar.onclick = function () {
    boxDespesa.style.display = "none";
};

// Configura o botão de fechar a janela modal
fechaBox.onclick = function () {
    boxDespesa.style.display = "none";
};

// Ordenação pelas três colunas
th1.onclick = () => {
    let dados = readDespesas();
    dados.sort((a, b) =>
        a.descricao.localeCompare(b.descricao, "pt-br", { sensitivity: "base" })
    );
    updateDespesas(dados);
    mostraTabela();
};
th2.onclick = () => {
    let dados = readDespesas();
    dados.sort((a, b) =>
        a.categoria.localeCompare(b.categoria, "pt-br", { sensitivity: "base" })
    );
    updateDespesas(dados);
    mostraTabela();
};
th3.onclick = () => {
    let dados = readDespesas();
    dados.sort((a, b) =>
        a.valor.localeCompare(b.valor, "pt-br", { sensitivity: "base" })
    );
    updateDespesas(dados);
    mostraTabela();
};
th4.onclick = () => {
    let dados = readDespesas();
    dados.sort((a, b) =>
        a.data.localeCompare(b.data, "pt-br", { sensitivity: "base" })
    );
    updateDespesas(dados);
    mostraTabela();
};

// funções de apoio para formatar os valores da tabela
function categoria(p) {
    let categorias = ["Alimentação", "Contas", "Educação", "Emergência", "Lazer", "Investimentos", "Saúde", "Outros"];
    return categorias[parseInt(p) - 1];
}
function formataData(d) {
    [ano, mes, dia] = d.split("-");
    return dia + "-" + mes + "-" + ano;
}

// Funções para tratamento do filtro
limpaFiltro.onclick = function () {
    filtro.value = "";
    mostraTabela();
};

filtro.onkeyup = function () {
    mostraTabela();
};

function abrirPopUpdespesas() {
    document.getElementById('pop-up-lista-despesas').style.display = 'flex';
    document.getElementById('body').style.filter = 'blur(25px)';

}
function fecharPopUpdespesas() {
    document.getElementById('pop-up-lista-despesas').style.display = 'none';
    document.getElementById('body').style.filter = 'none';

}
// Após preparar todo o código, desenha a versão preliminar da tabela, com dados já existentes
mostraTabela();