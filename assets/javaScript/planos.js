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