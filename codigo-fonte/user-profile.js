function abrirEncerrar(){
    document.getElementById('pop-up-encerrar').style.display = 'flex';
    document.getElementById('body').style.filter = 'blur(25px)'

}
function fecharEncerrar(){
    document.getElementById('pop-up-encerrar').style.display = 'none';
    document.getElementById('body').style.filter = 'none'

}
function abrirAlterarSenha(){
    document.getElementById('pop-up-alterar-senha').style.display = 'flex';
    document.getElementById('body').style.filter = 'blur(25px)'

}
function fecharAlterarSenha(){
    document.getElementById('pop-up-alterar-senha').style.display = 'none';
    document.getElementById('body').style.filter = 'none'

}
document.getElementById('input-cancelar').addEventListener('click', function() {
    document.getElementById('input-senhas').required = false;
  });
  document.getElementById('input-cancelar').addEventListener('click', function() {
    document.getElementById('input-senhas1').required = false;
    document.getElementById('input-senhas2').required = false;
    document.getElementById('input-senhas3').required = false;
  });


  document.addEventListener(`DOMContentLoaded`, function() {
    const userProfitsLink = document.getElementById(`usr-profits-statement`);
 
    const userProfitsPageURL = `../user-profit-statement/user-profit-statement.html`;
 
    userProfitsLink.href = userProfitsPageURL;
});

document.addEventListener(`DOMContentLoaded`, function() {
    const userLossProfitsLink = document.getElementById(`usr-loss-profits-statement`);
 
    const userLossProfitsPageURL = `../user-loss-profit-statement/user-loss-profit-statement.html`;
 
    userLossProfitsLink.href = userLossProfitsPageURL;
});

document.addEventListener(`DOMContentLoaded`, function() {
    const usergoalsLink = document.getElementById(`usr-goals`);
 
    const usergoalsPageURL = `../user-goals/user-goals.html`;
 
    usergoalsLink.href = usergoalsPageURL;
});