class AtualizaFormulario{

  
  static etapa1(){
    let _form = document.querySelector('#formulario');
    let conteudo = `
    <form onsubmit="cadastroController.next(event)" class="cadastroFormulario" >
    <h2 class="cadastroFormulario__titulo">Informações pessoais</h2>
    <div class="cadastroFormulario__etapas">
    <div class="cadastroFormulario__etapas__etapa etapaActive">
      <div class="cadastroFormulario__etapas__etapaNumero etapaNumActive">
        1
      </div>
      <p>Informações pessoais</p>
    </div>
    <div class="cadastroFormulario__etapas__etapa">
      <div class="cadastroFormulario__etapas__etapaNumero">
        2
      </div>
      <p>Informações de pagamento</p>
    </div>
    <div class="cadastroFormulario__etapas__etapa">
      <div class="cadastroFormulario__etapas__etapaNumero">
        3
      </div>
      <p>Acesso à conta</p>
    </div>
    </div>
    <div class="div-input">
    <label for="nome">Nome Completo</label>
    <input id="nome" name="nome" type="text" class="div-input__input" required>
    </div>
    <div class="div-input">
    <label for="email">Email</label>
    <input id="email" name="email" type="email" class="div-input__input" required>
    </div>
    <div class="div-input">
    <label for="cpf">CPF</label>
    <input id="cpf" name="cpf" type="" class="div-input__input" required>
    </div>
    <div class="div-input">
    <label for="cellphone">Celular com DDD</label>
    <input id="cell" name="cellphone" type="" class="div-input__input" required>
    </div>
    <button onclick='topFunction()' type="submit" class="cadastroFormulario__submit">Continuar cadastro</button>
    </form>
    `;
    _form.innerHTML = conteudo;
  }
  static etapa2(){
    
    let _form = document.querySelector('#formulario');
    let conteudo = `
    <form onsubmit="cadastroController.next2(event)" class="cadastroFormulario" >
    <h2 class="cadastroFormulario__titulo">Informações de Pagamento</h2>
    <div class="cadastroFormulario__etapas">
    <div class="cadastroFormulario__etapas__etapa" onclick="AtualizaFormulario.etapa1()">
      <div class="cadastroFormulario__etapas__etapaNumero">
        1
      </div>
      <p>Informações pessoais</p>
    </div>
    <div class="cadastroFormulario__etapas__etapa etapaActive">
      <div class="cadastroFormulario__etapas__etapaNumero etapaNumActive">
        2
      </div>
      <p>Informações de pagamento</p>
    </div>
    <div class="cadastroFormulario__etapas__etapa">
      <div class="cadastroFormulario__etapas__etapaNumero">
        3
      </div>
      <p>Acesso à conta</p>
    </div>
    </div>
    <div class="cartoes">
      <span class="ccard MCARD"></span>
      <span class="ccard hipercard"></span>
      <span class="ccard hiper"></span>
      <span class="ccard visa"></span>
      <span class="ccard elo"></span>
      <span class="ccard amex"></span>
    </div>
    <div class="div-input">
      <input id="numCartao" name="numCartao" type="number" class="div-input__input" required placeholder='Numero do Cartão'>
    </div>
    <div class="div-input">
      <label for="titular">Nome do Titular</label>
      <input id="titular" name="titular" type="text" class="div-input__input" required placeholder='Nome'>
    </div>
    <div class="div-input">
      <label for="sobrenome">Sobrenome</label>
      <input id="sobrenome" name="sobrenome" type="text" class="div-input__input" required placeholder='Sobrenome'>
    </div>
    <div class="div-input">
      <label for="codigo">Código de Segurança (CSC)</label>
      <input id="codigo" name="codigo" type="number" class="div-input__input" required placeholder='3 dígitos'>
    </div>
    <button onclick='topFunction()' type="submit" class="cadastroFormulario__submit">Continuar cadastro</button>
    </form>
    `;
    _form.innerHTML = conteudo;
  }
  static etapa3(){
    
    let _form = document.querySelector('#formulario');
    let conteudo = `
    <form onsubmit="cadastroController.next3(event)" class="cadastroFormulario" >
    <h2 class="cadastroFormulario__titulo">Acesso à Conta</h2>
    <div class="cadastroFormulario__etapas">
    <div class="cadastroFormulario__etapas__etapa" onclick="AtualizaFormulario.etapa1()">
      <div class="cadastroFormulario__etapas__etapaNumero">
        1
      </div>
      <p>Informações pessoais</p>
    </div>
    <div class="cadastroFormulario__etapas__etapa" onclick="AtualizaFormulario.etapa2()">
      <div class="cadastroFormulario__etapas__etapaNumero">
        2
      </div>
      <p>Informações de pagamento</p>
    </div>
    <div class="cadastroFormulario__etapas__etapa etapaActive">
      <div class="cadastroFormulario__etapas__etapaNumero etapaNumActive">
        3
      </div>
      <p>Acesso à conta</p>
    </div>
    </div>
    <div class="div-input">
      <label for="username">Username</label>
      <input id="username" name="username" type="text" class="div-input__input" required>
    </div>
    <div class="div-input">
      <label for="senha1">Senha</label>
      <input id="senha1" name="senha1" type="password" class="div-input__input" required placeholder='Senha'>
    </div>
    <div class="div-input">
      <label for="senha2">Confirmar senha</label>
      <input id="senha2" name="senha2" type="password" class="div-input__input" required placeholder='Senha'>
    </div>
    <button type="submit" class="cadastroFormulario__submit">Finalizar Cadastro</button>
    </form>
    `;
    _form.innerHTML = conteudo;
  }
}