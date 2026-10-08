/*
console.log("Noite!");

// LAÇOS DE REPETIÇÃO

// FOR = PARA / DURANTE
// i = variável de controle
// i < 10 = duração do laço
// i++ = aumenta a interação de 1 em 1
for(var i = 0; i < 3; i++){
    console.log("X");
    //console.log(i);
}

console.log("CABO");

// WHILE = ENQUANTO
var contagem = 1
while(contagem < 51){
    console.log("Primeiro vem a pedra!");
    contagem = contagem + 5
}

console.log("Final");

// ARRAY
var lista = ["Arroz", 6, true, "outro", 7.7,["Sim",["Não"]]]

// Mostra o ARRAY
console.log(lista);

// Mostra um elemento especifico
console.log(lista[3]);

// Lenght - Retorna o número de itens no array
console.log(lista.length);

// LISTA DE TIMES
var times = ["São Paulo", "Vasco", "Santos", "Real Madrid", "Desportiva"]

// INTERAGE COM VALOR FIXO
for (let i = 0; i < 5; i++) {
    console.log("O time atual é: ",times[i]);
}
// INTERAGE COM VALOR RETORNADO
for (let i = 0; i < times.length; i++) {
    console.log("O time atual é: ",times[i]);
}
*/

/*
// FUNÇÕES PARA INTERAGIR COM UM ARRAY
var frutas = ["Laranja", "Manga", "Uva"]

// ARRAY ORIGINAL
console.log(frutas);

// PRA ADIÇÃO DE ELEMENTOS
// push - Adiciona no fim do array
frutas.push("Mexerica")
console.log(frutas);

// unshift - Adiciona no início do array
frutas.unshift("Morango")
console.log(frutas);

// PRA REMOÇÃO DE ELEMENTOS
// pop - remove o último elemento
var frutaRetirada = frutas.pop()
console.log("A útima fruta era: ", frutaRetirada);

// shift - remover do inicio do array
var exPrimeiraFruta = frutas.shift()
console.log("A ex primeira fruta era: ",exPrimeiraFruta);

// includes - descobrir se há um valor especifico nesse array
console.log("Garçom, tem pitu? ", frutas.includes("Pitu"));
console.log("Garçom, tem morango? ", frutas.includes("Morango"));

// sort - ordenar o array
frutas.sort()
console.log(frutas);

// reverse - invertero array
frutas.reverse()
console.log(frutas);

// covertendo o array
console.log(frutas.toString());

// junta o array, e troca o separador deles
console.log(frutas.join(" - "));

// SLICE - copia
// (em qual indice começa e depois da virgula, quantos elementos serão copiados)
console.log(frutas.length);
var parteCopiada = frutas.slice(2,3)
console.log("Cópia: ",parteCopiada);

// SPLICE
// pra remover
var removidos = frutas.splice(1,2)
console.log("Removidos: ",removidos);

// pra adicionar
frutas.splice(2, 0,"Coca-cola", "Guaraná", "Caju")
console.log(frutas);

// adicionar com substituição
frutas.splice(1, 3, "Computador", "Mouse")
console.log(frutas);
*/

var roupas = []

for (let i = 0; i < 3; i++) {
    var roupa = roupas.push(prompt("Me diz ai roupa legal: "))
}

console.log(roupas);