import {listaPlanos} from './listaPlanos.js';

console.log(listaPlanos)
let arr = window.location.href.split('?');
let planoNumber = arr[1];
let $ = document.querySelector.bind(document);
let inputPrecoPainel = $('#planoPrice')
let inputNomePainel = $('#planoNome')
inputPrecoPainel.innerText = listaPlanos[planoNumber].preco;
inputNomePainel.innerText = listaPlanos[planoNumber].nome;