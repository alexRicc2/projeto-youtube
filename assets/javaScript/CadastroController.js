class CadastroController{
  constructor(){
    this._nome;
    this._cpf;
    this._email; 
    this._cell;
    this._numCartao
    this._titular
    this._sobrenome
    this._cod
    this._username
    this._senha
    this._aluno;

    let arr = window.location.href.split('?');
    this._planoNumber = arr[1];
    AtualizaFormulario.etapa1();
  }

  next(e){
    e.preventDefault();
    this._pegaInfoDoForumulario1();
    AtualizaFormulario.etapa2();
  }
  _pegaInfoDoForumulario1(){
    let $ = document.querySelector.bind(document);
    this._nome = $('#nome').value;
    this._cpf = $('#cpf').value;
    this._email = $('#email').value;
    this._cell = $('#cell').value;
  }
  
  next2(e){
    e.preventDefault();
    this._pegaInfoDoForumulario2();
    AtualizaFormulario.etapa3();
  }
  _pegaInfoDoForumulario2(){
    let $ = document.querySelector.bind(document);
    this._numCartao = $('#numCartao').value;
    this._titular = $('#titular').value;
    this._sobrenome = $('#sobrenome').value;
    this._cod = $('#codigo').value;
  }

  next3(e){
    e.preventDefault();
    this._pegaInfoDoForumulario3();
    this._criaAluno();
    console.log(this._aluno)
  }
  _pegaInfoDoForumulario3(){
    let $ = document.querySelector.bind(document);
    this._username = $('#username').value;
    this._senha = $('#senha1').value;
  }
  _criaAluno(){
    this._aluno = new Cadastro(
      this._nome,
      this._cpf,
      this._email,
      this._cell,
      this._numCartao,
      this._titular,
      this._sobrenome,
      this._cod,
      this._username,
      this._senha,
      this._planoNumber
    )
  }

}