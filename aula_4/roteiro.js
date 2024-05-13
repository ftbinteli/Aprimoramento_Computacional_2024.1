1. Funções Básicas

Primeiro, é essencial entender o que é uma função e como criar uma. Funções são blocos de código que realizam 
uma tarefa específica e podem ser chamadas quantas vezes forem necessárias.


function saudar() {
  console.log("Olá, tudo bem?");
}

saudar(); // Chama a função saudar

=======================================================================================================
2. Funções com Parâmetros

As funções podem receber dados externos através de parâmetros.


function saudar(nome) {
  console.log("Olá, " + nome + "! Tudo bem?");
}

saudar("Maria"); // Chama a função saudar passando "Maria" como argumento

=======================================================================================================
3. Iterando Sobre Arrays com Loop for

Antes de usar o forEach, é útil entender como iterar sobre arrays com um loop for.


let frutas = ["Maçã", "Banana", "Laranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

=======================================================================================================
4. Funções que Usam forEach

Agora, introduzindo o forEach, que é um método disponível para arrays em JavaScript. Ele executa uma função 
// This is a function declaration that takes a parameter 'fruta'
// It simply logs the value of 'fruta' to the console
function imprimirFruta(fruta) {
  console.log(fruta);
}

// This is an array of strings representing different fruits
let frutas = ["Maçã", "Banana", "Laranja"];

// The forEach method is called on the 'frutas' array
// It iterates over each element in the array and executes the 'imprimirFruta' function for each element
// The 'imprimirFruta' function is passed as an argument to the forEach method
frutas.forEach(imprimirFruta);

=======================================================================================================
5. forEach com Função Anônima

Muitas vezes, forEach é usado com funções anônimas (ou funções arrow) para simplificar o código.


let frutas = ["Maçã", "Banana", "Laranja"];

frutas.forEach(function(fruta) {
  console.log(fruta);
});

=======================================================================================================
6. forEach com Arrow Function

Uma versão ainda mais concisa usando arrow functions.


let frutas = ["Maçã", "Banana", "Laranja"];

frutas.forEach(fruta => console.log(fruta));
