class Receita {

    constructor() {
        this.id = 1;
        this.arrayReceitas = []
    }

    salvar() {
        let receita = this.lerDados();

        if(this.validaCampos(receita)) {
            this.adicionar(receita);
        }

        console.log(this.arrayReceitas);

        this.listaTabela();
        this.cancelar();
    }

listaTabela() {
    let tbody = document.getElementById('tbody');
    tbody.innerText = '';

    for(let i = 0; i < this.arrayReceitas.length; i++ ) {
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_receita = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_acoes = tr.insertCell();

        td_id.innerText = this.arrayReceitas[i].id;
        td_receita.innerText = this.arrayReceitas[i].nomeReceita;
        td_valor.innerText = this.arrayReceitas[i].valor;
        
        td_id.classList.add('center');

        let imgDelete = document.createElement('img');
        imgDelete.src = 'img/delete.png';
        imgDelete.setAttribute("onclick", "receita.deletar("+ this.arrayReceitas[i].id +")");

        td_acoes.appendChild(imgDelete);
    }

}

    adicionar(receita) {
        this.arrayReceitas.push(receita);
        this.id++;
    }

    lerDados() {
        let receita = {}

        receita.id = this.id;
        receita.nomeReceita = document.getElementById("receita").value;
        receita.valor = document.getElementById('valor').value;

        return receita;
    }

    validaCampos(receita) {
        let msg = '';

        if(receita.nomeReceita == '') {
            msg += '- Informe o nome de Receita \n';
        }

        if(receita.valor == '') {
            msg += '- Informe o Valor de Receita \n';
        }

        if(msg != '') {
            alert(msg);
            return false
        }
        
        return true;
    }

    cancelar() {
        document.getElementById('receita').value = '';
        document.getElementById('valor').value = '';
    }

    deletar(id) {

        let tbody = document.getElementById('tbody');

        for(let i = 0; i < this.arrayReceitas.length; i++) {
            if(this.arrayReceitas[i].id == id) {
                this.arrayReceitas.splice(i, 1);
                tbody.deleteRow(i)
            }
        }

        console.log(this.arrayReceitas);
        
    }
}
function abrirPopUpReceitas(){
    document.getElementById('pop-up-lista-receitas').style.display = 'flex';
    document.getElementById('body').style.filter = 'blur(25px)';

}
function fecharPopUpReceitas(){
    document.getElementById('pop-up-lista-receitas').style.display = 'none';
    document.getElementById('body').style.filter = 'none';

}