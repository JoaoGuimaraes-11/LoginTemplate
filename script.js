function emailBtn(){
    const inputEmail = document.querySelector('#txtE');
    inputEmail.addEventListener('focus', ()=>{
        const emailItem = document.querySelector('.bi-envelope');
        emailItem.classList.toggle('ativo');
        inputEmail.addEventListener('focusout', ()=>{
            emailItem.classList.remove('ativo');
        })
    })
}
emailBtn();
function passBtn(){
    const btnSenha = document.getElementById('btn-senha');
    btnSenha.addEventListener('click', ()=>{
        var inputPass = document.querySelector('#txtP');
        var btnShowPass = document.querySelector('#btn-senha');
        if(inputPass.type === 'password'){
            inputPass.setAttribute('type', 'text');
            btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
        }
        else{
            inputPass.setAttribute('type', 'password');
            btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
        }
    })
}
passBtn();