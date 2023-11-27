function createReceita(receita, fncallback) {
    fetch("https://www.uuidgenerator.net/api/version4")
      .then((r) => r.text())
      .then((t) => {
        receita.id = t;
        let receitas = readReceitas();
        receitas.push(receita);
        updateReceitas(receitas);
        fncallback();
      })
      .catch((erro) => console.error(erro));
  }
  
  function readReceitas() {
    return JSON.parse(localStorage.getItem("receitas")) || [];
  }
  
  function readReceita(idReceita) {
    let receitas = readReceitas();
    return receitas.find((receita) => receita.id == idReceita);
  }
  
  function updateReceitas(receitas) {
    localStorage.setItem("receitas", JSON.stringify(receitas));
  }
  
  function updateReceita(receitaAtualizada) {
    let receitas = readReceitas();
    let indice = receitas.findIndex((receita) => receita.id == receitaAtualizada.id);
    receitas[indice] = receitaAtualizada;
    updateReceitas(receitas);
  }
  
  function deleteReceita(idExcluida) {
    let receitas = readReceitas();
    let indice = receitas.findIndex((receita) => receita.id == idExcluida);
    receitas.splice(indice, 1);
    updateReceitas(receitas);
  }
  