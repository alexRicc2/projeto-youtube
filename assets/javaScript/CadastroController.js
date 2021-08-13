class CadastroController{
  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputNome = $('#nome');
    this._inputCpf = $('#cpf');
    this._inputEmail = $('#email');
    this._inputCell = $('#cell');
    this._aluno;
    let arr = window.location.href.split('?');
    this._planoNumber = arr[1];
  }
  _


  next(e){
    e.preventDefault();
    this._criaAluno();
    console.log(this._aluno);
    this._secao2();
  }
  _criaAluno(){
    this._aluno = new Cadastro(
      this._inputNome.value,
      this._inputCpf.value,
      this._inputEmail.value,
      this._inputCell.value,
      this._planoNumber
    )
  }
  _secao2(){
    let form = document.querySelector('#formulario');

    let conteudo = `
    <h2 class="cadastroFormulario__titulo">Informações de Pagamento</h2>
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
    <button type="submit" class="cadastroFormulario__submit">Continuar cadastro</button>
    `;
    form.innerHTML = conteudo;
  }
}