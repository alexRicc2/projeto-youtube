import {listaPlanos} from './listaPlanos.js';
let planos = document.getElementsByClassName("plano")

for(let i=0; i<planos.length;i++){
  planos[i].onclick = function(event){
    let el = planos[0];
    while(el){
      if(el.tagName == "DIV")el.classList.remove("plano-selected"); 
      el = el.nextSibling;
    }
    event.currentTarget.classList.add("plano-selected");
  }
}
for(let i=0; i<planos.length;i++){
  planos[i].querySelector('.plano__titulo').innerText = listaPlanos[i].nome;
  planos[i].querySelector('.plano__price').innerText = `R$${listaPlanos[i].preco}`
}
console.log(listaPlanos)
