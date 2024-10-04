/*
Comandos de Funções em JavaScript
*/

//Função Anonima
/*
const soma = function (a, b) { // Função de soma anônima
    return a + b
} 
console.log(soma(2, 3))
*/

// Função com Construtor
// Regras: 1 - O último parâmetro é o corpo da função
/*
const sub = new Function('a', 'b', 'return a - b') // Função de subtração feita a apartir de um construtor
console.log(sub(5, 2)) // Impressão de subtração no console = 3
*/

// Função Arrow
/*
const mult = (a, b) => a * b // Função de multiplicação feita a partir de uma arrow function
console.log(mult(5, 2)) // Impressão de multiplicação no console = 10

const div = (a, b) => a / b // Função de divisão feita a partir de uma arrow function
console.log(div(10, 2)) // Impressão de divisão no console = 5

*/

// Função com retorno implícito
/*
const pot = (a, b) => a ** b // Função de potenciação feita a partir de uma arrow function com retorno implícito
console.log(pot(2, 3)) // Impressão de potenciação no console = 8
*/


// Funções Geradoras

// Métodos
// next() = Retorna o valor da chamada
// return() = Retorna o valor e encerra a função
// throw() = Retorna um erro
/*
function* geradora() { // Função geradora
    yield 'a' // Primeira chamada
    yield 'b' // Segunda chamada
    yield 'c' // Terceira chamada
}
const g1 = geradora() // Chamada da função geradora
for (let valor of g1) { // Loop para imprimir os valores
    console.log(valor) // Impressão dos valores
}


function* perguntas() { // Função geradora
    const nome = yield 'Qual é o seu nome?' // Primeira chamada
    const idade = yield 'Qual é a sua idade?' // Segunda chamada
    return `Olá ${nome}, você tem ${idade} anos de idade.` // Retorno da função
}

const it = perguntas() // Chamada da função geradora
console.log(it.next().value) // Impressão do primeiro valor
console.log(it.next('Lucas').value) // Impressão do segundo valor
console.log(it.next(22).value) // Impressão do terceiro valor
*/