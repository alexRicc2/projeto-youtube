class CadastroController{
  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputNome = $('#nome');
    this._inputCpf = $('#cpf');
    this._inputEmail = $('#email');
    this._inputCell = $('#cell');

    this._aluno;
  }
  next(e){
    e.preventDefault();
    this._criaAluno();
    console.log(this._aluno);
  }
  _criaAluno(){
    this._aluno = new Cadastro(
      this._inputNome.value,
      this._inputCpf.value,
      this._inputEmail.value,
      this._inputCell.value
    )
  }
}