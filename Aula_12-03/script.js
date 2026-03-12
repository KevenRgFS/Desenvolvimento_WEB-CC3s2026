//buscar o elemento via javascript

let meuElemento = document.getElementById("paragrafo"); //id
console.log(meuElemento);
console.log(meuElemento.textContent); //pega o conteúdo da tag

//buscaro elemento HTML pela classe

let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);
for(let i=0; i<paragrafo1.length; i++){
    console.log(paragrafo1[i].textContent);
}

//buscar o elemento pela tag

let paragrafo2 = document.getElementsByTagName('p');
console.log(paragrafo2);

//criar o elemento HTML

