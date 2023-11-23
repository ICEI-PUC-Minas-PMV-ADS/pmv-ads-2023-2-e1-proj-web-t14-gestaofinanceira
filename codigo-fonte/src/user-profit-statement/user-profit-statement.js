let dadosGrafico = [0, 0];
let seriesGrafico = {
    labels: ["Fixa", "Variável"],
    datasets: [
        {
            label: "Receitas",
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
    let listadeReceitas = readReceitas();
    dados = listadeReceitas.filter(
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
          ${item.valor}
        </td>
        <td class="celula-3">
          ${tipo(item.tipo)}
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

    // atualiza gráfico de receitas por tipo
    dadosGrafico = [0, 0, 0];
    dados.forEach((t) => dadosGrafico[t.tipo - 1]++);
    chart.data.datasets[0].data = dadosGrafico;
    chart.update();
}

// Mostra a janela modal para criação de nova receita
btAdicionar.onclick = function () {
    campoDescricao.value = "";
    campoValor.value = "";
    campoData.value = "";
    campoTipo.value = "";
    campoDescricao.disabled = false;
    campoValor.disabled = false;
    campoData.disabled = false;
    campoTipo.disabled = false;
    boxReceita.style.display = "block";
    btMTSalvar.style.display = "inline-block";
    btMTAlterar.style.display = "none";
    btMTExcluir.style.display = "none";
    btMTSalvar.disabled = true;
    campoDescricao.focus();
};

// Verifica se os três campos estão preenchidos antes de criar ou alterar receita
let liberaBotaoMT = function () {
    if (
        campoDescricao.value.length > 0 &&
        campoValor.value.length > 0 &&
        campoData.value.length > 0 &&
        campoTipo.value.length > 0
    ) {
        btMTSalvar.disabled = false;
        btMTAlterar.disabled = false;
    } else {
        btMTSalvar.disabled = true;
        btMTAlterar.disabled = true;
    }
};
campoDescricao.onkeyup = liberaBotaoMT;
campoValor.onchange = liberaBotaoMT;
campoData.onchange = liberaBotaoMT;
campoTipo.onchange = liberaBotaoMT;

// Confirma a criação da receita
btMTSalvar.onclick = function () {
    let receita = {
        descricao: campoDescricao.value,
        valor: campoValor.value,
        data: campoData.value,
        tipo: campoTipo.value,
    };
    createReceita(receita, mostraTabela);
    boxReceita.style.display = "none";
};

// Mostra a janela modal para edição de uma receita existente
btEditar.onclick = function () {
    let selecoes = Array.from(
        document.querySelectorAll("input[name=campoSelecao]")
    );
    let selecionado = selecoes.find((i) => i.checked == true);
    if (selecionado) {
        let receita = readReceita(selecionado.value);
        campoDescricao.value = receita.descricao;
        campoValor.value = receita.valor;
        campoData.value = receita.data;
        campoTipo.value = receita.tipo;
        campoID.value = receita.id;
        campoDescricao.disabled = false;
        campoValor.disabled = false;
        campoData.disabled = false;
        campoTipo.disabled = false;
        boxReceita.style.display = "block";
        btMTSalvar.style.display = "none";
        btMTAlterar.style.display = "inline-block";
        btMTExcluir.style.display = "none";
        btMTAlterar.disabled = false;
        campoDescricao.focus();
    }
};

// Confirma a alteração da receita
btMTAlterar.onclick = function () {
    let receitaEditada = {
        id: campoID.value,
        descricao: campoDescricao.value,
        valor: campoValor.value,
        data: campoData.value,
        tipo: campoTipo.value,
    };
    updateReceita(receitaEditada);
    boxReceita.style.display = "none";
    mostraTabela();
};

// Mostra a janela modal para exclusão de uma receita existente
btExcluir.onclick = function () {
    let selecoes = Array.from(
        document.querySelectorAll("input[name=campoSelecao]")
    );
    let selecionado = selecoes.find((i) => i.checked == true);
    if (selecionado) {
        let receita = readReceita(selecionado.value);
        campoDescricao.value = receita.descricao;
        campoValor.value = receita.valor;
        campoData.value = receita.data;
        campoTipo.value = receita.tipo;
        campoID.value = receita.id;
        campoDescricao.disabled = true;
        campoValor.disabled = true;
        campoData.disabled = true;
        campoTipo.disabled = true;
        boxReceita.style.display = "block";
        btMTSalvar.style.display = "none";
        btMTAlterar.style.display = "none";
        btMTExcluir.style.display = "inline-block";
    }
};

// Confirma a exclusão da receita
btMTExcluir.onclick = function () {
    deleteReceita(campoID.value);
    boxReceita.style.display = "none";
    mostraTabela();
};

// Cancela a criação, alteração ou exclusão da receita
btMTCancelar.onclick = function () {
    boxReceita.style.display = "none";
};

// Configura o botão de fechar a janela modal
fechaBox.onclick = function () {
    boxReceita.style.display = "none";
};

// Ordenação pelas três colunas
th1.onclick = () => {
    let dados = readReceitas();
    dados.sort((a, b) =>
        a.descricao.localeCompare(b.descricao, "pt-br", { sensitivity: "base" })
    );
    uptadeReceitas(dados);
    mostraTabela();
};
th2.onclick = () => {
    let dados = readReceitas();
    dados.sort((a, b) =>
        a.valor.localeCompare(b.valor, "pt-br", { sensitivity: "base" })
    );
    uptadeReceitas(dados);
    mostraTabela();
};
th3.onclick = () => {
    let dados = readReceitas();
    dados.sort((a, b) =>
        a.tipo.localeCompare(b.tipo, "pt-br", { sensitivity: "base" })
    );
    uptadeReceitas(dados);
    mostraTabela();
};
th4.onclick = () => {
    let dados = readReceitas();
    dados.sort((a, b) =>
        a.data.localeCompare(b.data, "pt-br", { sensitivity: "base" })
    );
    uptadeReceitas(dados);
    mostraTabela();
};

// funções de apoio para formatar os valores da tabela
function tipo(p) {
    let tipos = ["Fixa", "Variável"];
    return tipos[parseInt(p) - 1];
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

function abrirPopUpReceitas() {
    document.getElementById('pop-up-lista-receitas').style.display = 'flex';
    document.getElementById('body').style.filter = 'blur(25px)';

}
function fecharPopUpReceitas() {
    document.getElementById('pop-up-lista-receitas').style.display = 'none';
    document.getElementById('body').style.filter = 'none';

}

// Após preparar todo o código, desenha a versão preliminar da tabela, com dados já existentes
mostraTabela();