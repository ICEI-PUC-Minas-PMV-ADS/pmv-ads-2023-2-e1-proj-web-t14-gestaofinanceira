let dadosGrafico = [0, 0, 0, 0, 0, 0, 0, 0];

let chart = new Chart(grafico, {
    type: "doughnut",
    data: {
        labels: ["Alimentação", "Contas", "Educação", "Emergência", "Lazer", "Investimentos", "Saúde", "Outros"],
        datasets: [
            {
                label: "Despesas",
                data: dadosGrafico,
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
    },
});

function mostraTabela() {
    // Carrega dados
    let listadeDespesas = readDespesas();
    let dados = listadeDespesas.filter(
        (t) =>
            filtro.value === "" ||
            t.descricao.toLowerCase().includes(filtro.value.toLowerCase())
    );

// Lista de categorias
const categorias = ["Alimentação", "Contas", "Educação", "Emergência", "Lazer", "Investimentos", "Saúde", "Outros"];

// Inicializa uma string para armazenar o HTML
let distribuicaoDespesasHTML = "";

// Percorre todas as categorias
categorias.forEach((categoria, index) => {
    // Filtra as despesas da categoria atual
    let despesasCategoria = dados.filter((despesa) => despesa.categoria === (index + 1).toString());

    // Calcula o total para a categoria atual
    let totalCategoria = despesasCategoria.reduce((total, despesa) => {
        return total + parseFloat(despesa.valor.replace(',', '.')); // Ajuste na conversão do valor
    }, 0);

    // Formata o total como moeda com duas casas decimais
    let totalCategoriaFormatado = totalCategoria.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Adiciona o HTML para a categoria
    distribuicaoDespesasHTML += `<p>${categoria}: ${totalCategoriaFormatado}</p>`;
});

// Atualiza a <div class="distribuicao-despesas">
let distribuicaoDespesas = document.querySelector(".distribuicao-despesas");
distribuicaoDespesas.innerHTML = distribuicaoDespesasHTML;

    // gera conteúdo da tabela
    let conteudo = "";
    dados.forEach((item) => {
        let valorFormatado = parseFloat(item.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

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
                    ${valorFormatado}
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

// Restante do código...

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
    corpoBox.style.display = "flex";
    btMTSalvar.style.display = "inline-block";
    btMTAlterar.style.display = "none";
    btMTExcluir.style.display = "none";
    btMTSalvar.disabled = true;
    campoDescricao.focus();
    document.getElementById('body').style.filter = 'blur(25px)'
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
    corpoBox.style.display = "none";
    document.getElementById('body').style.filter = 'none'
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
        corpoBox.style.display = "flex";
        btMTSalvar.style.display = "none";
        btMTAlterar.style.display = "inline-block";
        btMTExcluir.style.display = "none";
        btMTAlterar.disabled = false;
        campoDescricao.focus();
        document.getElementById('body').style.filter = 'blur(25px)'
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
    corpoBox.style.display = "none";
    mostraTabela();
    document.getElementById('body').style.filter = 'none'
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
        corpoBox.style.display = "flex";
        btMTSalvar.style.display = "none";
        btMTAlterar.style.display = "none";
        btMTExcluir.style.display = "inline-block";
        document.getElementById('body').style.filter = 'blur(25px)'
    }
};

// Confirma a exclusão da despesa
btMTExcluir.onclick = function () {
    deleteDespesa(campoID.value);
    corpoBox.style.display = "none";
    document.getElementById('body').style.filter = 'none'
    mostraTabela();
};

// Cancela a criação, alteração ou exclusão da despesa
btMTCancelar.onclick = function () {
    corpoBox.style.display = "none";
    document.getElementById('body').style.filter = 'none'
};

// Configura o botão de fechar a janela modal
fechaBox.onclick = function () {
    corpoBox.style.display = "none";
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
atualizarBarraDeRolagem();

function atualizarBarraDeRolagem() {
    let categoriaDespesas = document.getElementById('categoriaDespesas');
    categoriaDespesas.scrollTop = categoriaDespesas.scrollHeight;
}

// Após preparar todo o código, desenha a versão preliminar da tabela, com dados já existentes
mostraTabela();

document.addEventListener(`DOMContentLoaded`, function() {
    const userProfitsLink = document.getElementById(`usr-profits-statement`);
 
    const userProfitsPageURL = `../user-profit-statement/user-profit-statement.html`;
 
    userProfitsLink.href = userProfitsPageURL;
});

document.addEventListener(`DOMContentLoaded`, function() {
    const userProfileLink = document.getElementById(`usr-profile`);
 
    const userProfilePageURL = `../user-profile/user-profile.html`;
 
    userProfileLink.href = userProfilePageURL;
});

document.addEventListener(`DOMContentLoaded`, function() {
    const userProfileLink = document.getElementById(`usr-goals`);
 
    const userProfilePageURL = ``;
 
    userProfileLink.href = userProfilePageURL;
});

document.addEventListener(`DOMContentLoaded`, function() {
    const usergoalsLink = document.getElementById(`homepage`);
 
    const homepagePageURL = `../homepage/index.html`;
 
    homepageLink.href = homepagePageURL;
});