import {listaPlanos} from './listaPlanos.js';

console.log(listaPlanos)
let arr = window.location.href.split('?');
let planoNumber = arr[1];
let $ = document.querySelector.bind(document);
let inputPrecoPainel = $('#planoPrice')
let inputNomePainel = $('#planoNome')
let inputAtributosPainel = $('#planoAtributos')
inputPrecoPainel.innerText = `R$${listaPlanos[planoNumber].preco}`;
inputNomePainel.innerText = listaPlanos[planoNumber].nome;
inputAtributosPainel.innerHTML = listaPlanos[planoNumber].atributos.map(atributo => `<li><i class='fas fa-check'></i>${atributo}</li>`).join("");