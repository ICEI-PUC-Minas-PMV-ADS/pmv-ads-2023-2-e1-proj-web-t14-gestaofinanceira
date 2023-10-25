const form = document.getElementById('form')
const username = document.getElementById('username')
const useremail = document.getElementById('useremail')
const userpassword = document.getElementById('userpassword')
const userpassword2 = document.getElementById('userpassword2')

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checarinput(); 
});

function checarinput(){
    const usernameValue = username.value;
    const useremailValue = useremail.value;
    const userpasswordValue = userpassword.value;
    const userpassword2Value = userpassword2.value;

    if(usernameValue === ""){
        setErrorFor(username, "*Campo obrigatório");
    }
    else{
        setSuccessFor(username);
    }

    if(useremailValue === ""){
        setErrorFor(useremail, "*Campo obrigatório");
    }else if(!checkEmail(useremailValue)){
        setErrorFor(useremail,"*Insira um email válido");

    }else{
        setSuccessFor(useremail);
    }
    
    if(userpasswordValue ===""){
        setErrorFor(userpassword,"*Campo obrigatório");
    }else if (userpasswordValue.length < 8){
        setErrorFor(userpassword,"A senha deve ter no mínimo 8 caracteres");
    }else{
        setSuccessFor(userpassword);
    }

    if(userpassword2Value ===""){
        setErrorFor(userpassword2,"*Campo obrigatório");
    }else if(userpassword2Value != userpasswordValue){
        setErrorFor(userpassword2,"As senhas não são iguais !!");
    }else{
        setSuccessFor(userpassword2);
    }
}

function setErrorFor(input, message){
    const wrapperInput = input.parentElement;
    const p = wrapperInput.querySelector('p');

    p.innerText = message;
    wrapperInput.className = 'wrapper-inputError';
}

function setSuccessFor(input){
    const wrapperInput = input.parentElement;
    wrapperInput.className = "wrapper-inputSuccess";
}

function checkEmail(useremail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      useremail
    );
}
