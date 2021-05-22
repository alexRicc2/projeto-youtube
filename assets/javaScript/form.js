const validacao = document.querySelector('[data-form-botao]')

validacao.addEventListener('click',valida)

function valida(evento){

    evento.preventDefault()

    const email = document.querySelector('[data-form-email]').value
    const senha = document.querySelector('[data-form-senha]').value

    const emailRGEX = /^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$/
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
