console.log("Opa");

var musicas = ["Pera aí", "Se...", "segredos"];
var cantores = ["Cirilo", "Djavan", "Frejat"];

for (var i = 0; i < musicas.length; i++) {
  console.log(musicas[i], "-", cantores[i]);
}

// OBJETO
var filme1 = {
  //"chave" : "valor"
  titulo: "Senhor dos anéis: O retorno do Rei",
  genero: "Fantasia",
  anoLan: 2003,
};
console.log(filme1);

// ACESSANDO UMA CHAVE ESPECIFICA
console.log(filme1.titulo);

console.log(`O filme: ${filme1.titulo} foi lançado em ${filme1.anoLan}`);

console.log(`Gênero: ${filme1["genero"]}`);

// OBJETO VAZIO
var garrafa = {};

console.log(garrafa);

// CRIAR PROPRIEDADES
garrafa.cor = "Bege";
garrafa.preco = 99;
garrafa.tamanho = "710ml";
garrafa["tampada"] = false;
console.log(garrafa);

// ALTERA UMA PROPRIEDADE EXISTENTE
garrafa.cor = "Vermelho";
console.log(garrafa);

// PEÇA AO USUÁRIO UMA NOVA PROPRIEDADE PARA ADICIONAR NA GARRAFA
// EM SEGUIDA, PEÇA O VALOR DESSA NOVA PROPRIEDADE
// AO FIM, ADICIONE-AS NO OBJETO GARRAFA
/*
var novaPropriedade = prompt("Nova propriedade: ");
garrafa[novaPropriedade] = prompt("Valor: ");
console.log(garrafa[novaPropriedade]);
*/
// AINDA SOBRE OBJETOS
var leao = {
  nome: "Simba",
  temPelo: true,
  especie: "Doméstico",
  peso: 60,
  // MÉTODOS
  andar: function () {
    console.log("Estou andando");
  },
  falar: () => {
    console.log("AAAAAAAA");
  },
};

console.log(leao);
// MOSTRA O TEXTO DO MÉTODO
console.log(leao.andar);
// EXECUTAR O MÉTODO DO LEÃO
leao.falar()

