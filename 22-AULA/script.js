// Console - terminal do navegador
/*
console.log(console);

// Window
alert()
prompt()

console.log(window);
*/

// Document - DOM, SEU CÓDIGO HTML INTEIRO
console.log(document);
console.log(document.head);
console.log(document.body);

// SEÇÃO 1

// Seleciona elementos pela tag
var titulos = document.getElementsByTagName("h1");
console.log(titulos);

// Seleciona elementos pela class dele
var paragrafos = document.getElementsByClassName("para");
console.log(paragrafos);

// Seleciona elemento por ID
var especifico = document.getElementById("p3");
console.log(especifico);

// Alteração de estilos
// Pego pelo ID
especifico.style.backgroundColor = "green";
especifico.style.color = "yellow";

// Pela CLASS
paragrafos[0].style.backgroundColor = "pink";

// Pela TAG
titulos[2].style.backgroundColor = "orange";

// Seção 2
// Função ativada, mas criada no javascript
function cliquei() {
  console.log("SAAAAAAAAAI");
}
let = qtd = 0;
// Função ativada, mas criada no javascript, via eventListener
document.getElementById("btnCliqueDuplo").addEventListener("dblclick", () => {
  qtd++;
  console.log(`Cliques: ${qtd}`);
});

// Botão clicável, que altera vários
document.getElementById("shazam").addEventListener("click", () => {
  for (let i = 0; i < titulos.length; i++) {
    titulos[i].style.backgroundColor = "red";
    titulos[i].style.color = "yellow";
    titulos[i].style.fontSize = "100px";
  }
});

// Uso do THIS
// Função ativada, e o parametro veio com o this
function quemFoi(elementoQueChamou) {
  console.log(elementoQueChamou);
}

// SEÇÃO 3
document.getElementById("criaTexto").addEventListener("click", () => {
  // INNERTEXT - TEXTCONTENT - Altera o texto do alemento
  document.getElementById("textoCriado").innerText = "Mudou";
});

document.getElementById("criaHtml").addEventListener("click", () => {
    // INNERHTML - Aletera o elemento
    document.getElementById("vazia").innerHTML += "<h2> alooooooo </h2>"
});
