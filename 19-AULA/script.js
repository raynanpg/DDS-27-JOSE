console.log("oi");

// FUNÇÕES
// SÓ EXECUTA
function teste() {
  console.log("To funcionando");
}
// EXECUTANDO A FUNÇÃO
teste();

// COM RETORNO
function soma() {
  return 3 + 4;
}
console.log(soma());

// MOSTRA APENAS O TEXTO DA FUNÇÃO, NÃO EXECUTA
console.log(soma);

// COM PARÂMETROS
function teste2(parametro) {
  console.log("O parâmetro enviado foi: ", parametro);
}

// EXECUTANDO
teste2("Arroz");

var nome = "Jéssica";
teste2(nome);

// FUNÇÃO
function media(n1, n2) {
  let resultado = (n1 + n2) / 2;
  return resultado;
}
// GUARDA RESULTADO EM VARIÁVEL, PRA DEPOIS UTILIZAR
var final = media(9, 7);
console.log("Resultado da média: ", final);

// FUNÇÃO ANÔNIMA
// É UMA FUNÇÃO QUE NÃO TEM NOME, E SEU TEXTO É GUARDADO EM UMA VARIÁVEL
var mensagem = function () {
  console.log("Oi, meu chapa");
};
// MOSTRA O TEXTO DA FUNÇÃO
console.log(mensagem);

// APENAS GUARDA O TEXTO DA FUNÇÃO
mensagem;

// EXECUTA A FUNÇÃO, COLOCO OS ()
mensagem();

// ARROW FUNCTION - FUNÇÃO DE SETA
// FORMA MAIS COMUM DE ESCREVER FUNÇÕES NO JAVASCRIPT
const multiplicar = (x, y) => {
  let result,
    primeiro = x,
    segundo = y;
  result = primeiro * segundo;
  return result;
};

console.log("O resultado da multiplicação é: ", multiplicar(7, 4));

// MAIS MENOR AINDA
// QUANDO SÓ TEM UMA LINHA DE RETORNO, O RETURN PODE SER OMITIDO TAMBÉM
const dobro = (numero) => numero * 2;

console.log("O dobro é: ", dobro(42));

// FAÇA UM PEDIDO DE UM NÚMERO AO USUÁRIO, E UTILIZE O VALOR INFORMADO PARA PASSAR A UMA FUNÇÃO DE SETA, E RETORNAR A DIVISÃO POR DOIS DAQUELE VALOR. E MOSTRE NO CONSOLE O RESULTADO.

var numero1 = Number(
  prompt(
    "Me informe um número para saber a divisão dele por outros dois números: ",
  ),
);

console.log(numero1);

const divisao = (numero1) => {
  let resultado2,
    nu = numero1;
  resultado2 = numero1 / 2;
};

console.log("O resultado da vivisão do seu número por 2 é: ", divisao());
