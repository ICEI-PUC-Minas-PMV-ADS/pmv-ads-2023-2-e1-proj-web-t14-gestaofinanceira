function createDespesa(despesa, fncallback) {
    fetch("https://www.uuidgenerator.net/api/version4")
        .then((r) => r.text())
        .then((t) => {
            despesa.id = t;
            let despesas = readDespesas();
            despesas.push(despesa);
            updateDespesas(despesas);
            fncallback();
        })
        .catch((erro) => console.error(erro));
}

function readDespesas() {
    return JSON.parse(localStorage.getItem("despesas")) || [];
}

function readDespesa(idDespesa) {
    let despesas = readDespesas();
    return despesas.find((despesa) => despesa.id == idDespesa);
}

function updateDespesas(despesas) {
    localStorage.setItem("despesas", JSON.stringify(despesas));
}

function updateDespesa(despesaAtualizada) {
    let despesas = readDespesas();
    let indice = despesas.findIndex((despesa) => despesa.id == despesaAtualizada.id);
    despesas[indice] = despesaAtualizada;
    updateDespesas(despesas);
}

function deleteDespesa(idExcluida) {
    let despesas = readDespesas();
    let indice = despesas.findIndex((despesa) => despesa.id == idExcluida);
    despesas.splice(indice, 1);
    updateDespesas(despesas);
}