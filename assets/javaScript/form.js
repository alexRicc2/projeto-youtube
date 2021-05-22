const validacao = document.querySelector('[data-form-botao]')

validacao.addEventListener('click',valida)

function valida(evento){

    evento.preventDefault()

    const email = document.querySelector('[data-form-email]').value
    const senha = document.querySelector('[data-form-senha]').value

    const emailRGEX = /^[a-z0-9.]+[@][a-z0-9]+\.[a-z0-9]+$/
    const senhaRGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/
    
    const validaEmail = emailRGEX.test(email)
    const validaSenha = senhaRGEX.test(senha)

    console.log(email)
    console.log(senha)
    console.log(validaEmail)
    console.log(validaSenha)

    if(validaEmail && validaSenha){
        alert("Cadastrado com sucesso")
    }
    else if(!validaEmail && !validaSenha){
        alert("Dados invalidos")
    }
    else if(!validaEmail){
        alert("Email invalido")
    }
    else{
        alert("Senha invalida")
    }
    
}

document.querySelectorAll('a[href^="#"]').forEach(function (element) {
    if (!element.hash) return;
    if (element.origin + element.pathname !== self.location.href) return;
    
    (function (destination) {
        element.addEventListener('click', function (event) {
            window.scrollTo({
                top: destination.offsetTop,
                behavior: 'smooth'
            });
            event.preventDefault();
        }, false);
    })(document.querySelector(element.hash));
});