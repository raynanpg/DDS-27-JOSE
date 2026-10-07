// DESVIOS CONDICIONAIS

// IF = SE

var estaVivo = true

// PRIMEIRA COMPARAÇÃO
if(estaVivo){
    console.log("Parabéns, que daora!");
    
}
// SEGUNDA COMPARAÇÃO. SÓ VEM PRA CÁ SE A PRIMEIRA DER ERRADO
else if (estaVivo == undefined){
    console.log("Sei la irmao, mei esquisito isso ai kk");
}
// ULTIMO CASO, SÓ ENTRA AQ SE TODAS ACIMA DEREM ERRADO
else{
    console.log("Morreu");
}

// SWITCH/CASE
var camisa = "Marrom"

switch(camisa){
    case "Preto":
        console.log("Parabéns, você ganhou uma aula de história");
    break
    case "Branco":
        console.log("Parabéns, você ganhou uma aula de geopolitica");
    break
    case "Vermelho":
        console.log("Parabéns, você ganhou uma aula especificamente  sobre Revolução Francesa ( 1789 a 1799 ), aprender de onde surgiu os termos esquerda e direita é bom para você saber onde se encaixa na sociedade");
    break
    default:
        console.log("Você é um animal");
    break    
}

// PROMPT - INTERAGE COM O USUÁRIO E COLETA UM VALOR
//var preferido = prompt("Qual é o seu pet favorito do mundo dos filmes: ")

//console.log("Seu PET preferido é: ",preferido);

console.log("");
console.log("");

var caixa1 = Number(prompt("Qual o tamanho da primeira caixa que você vai transportar: "))
var caixa2 = Number(prompt("Qual o tamanho da seunda caixa que você vai transportar: "))
var caixa3 = Number(prompt("Qual o tamanho da terceira caixa que você vai transportar: "))

// 1 VIAGEM
if((caixa1 < caixa2 && caixa2 < caixa3) || (caixa1 + caixa2 < caixa3)){  
    console.log("Apenas 1 viagem");
}

else if((caixa1 < caixa2 && caixa2 == caixa3) || (caixa1 == caixa2 && caixa2 < caixa3)){
    console.log("Apenas 2 viagens"); 
}

else{
    console.log("3 viagens necessárias");
    
}