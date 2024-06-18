/* Comandos Básicos */

console.log("Hello World!"); // Impressão de texto no console

// Variáveis e Constantes

let y = 20; // Declaração de variável com escopo de bloco, isto é, só pode ser acessada dentro do bloco onde foi declarada ou em blocos filhos
console.log(y); // Impressão de variável no console
const z = 30; // Declaração de constante
// z = 40; // Erro: Tentativa de alteração de constante
console.log(z); // Impressão de constante no console

// Operadores Aritméticos
let a = 10, b = 5, c , d, e, f, g, h; // Declaração de variável
c = a + b; // Adição
d = a - b; // Subtração
e = a * b; // Multiplicação
f = a / b; // Divisão
g = a % b; // Resto da divisão
h = a ** b; // Exponenciação


// Operadores Relacionais

/*
> Maior que
< Menor que
>= Maior ou igual a
<= Menor ou igual a
== Igual a
!= Diferente de
=== Igual a (valor e tipo)
!== Diferente de (valor e tipo)

*/

// Operadores Lógicos

/*

&& E
|| OU
! NÃO

*/

// Operadores de Bitwise

/*

& AND
| OR
^ XOR
~ NOT
<< Deslocamento à esquerda
>> Deslocamento à direita
>>> Deslocamento à direita sem sinal

*/


// Operadores Condicionais

/*
if (condição) {
    // Bloco de código
}
else if (condição) {
    // Bloco de código
}  
else {
    // Bloco de código
}

*/




// Operador Spread
let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5, 6]; // Copia os elementos de arr para arr2
console.log(arr2); // Impressão de array no console = [1, 2, 3, 4, 5, 6]

const jogador1 = {nome:"João", energia:20, vidas:5, velocidade:10};
const jogador2 = {nome:"Maria", energia:15, vidas:4, magia:20};
const jogador3 = {...jogador1, ...jogador2}; // Copia os atributos de jogador1 e jogador2 para jogador3

console.log(jogador3); // Impressão de objeto no console = {nome:"Maria", energia:15, vidas:4, velocidade:10, magia:20}
// Essa operação é conhecida como "merging" ou "shallow copy"

const objs1 = document.getElementsByTagName("div"); // Retorna um HTMLCollection
const objs2 = [...document.getElementsByTagName("div")]; // Converte o HTMLCollection para um array (é mais fácil de manipular)


// Laços de Repetição

let n = [10, 20, 30, 40, 50]; // Declaração de array

// For

for (let i = 0; i < n.length; i++) {
    console.log(n[i]); // Impressão de variável no console = 10 20 30 40 50
}

// For...in

for (let i in n) { // Percorre os índices do array = 0 1 2 3 4
    console.log(n[i]); 
}

// For...of
for (let i of n) { // Percorre os valores do array = 10 20 30 40 50
    console.log(i); 
}