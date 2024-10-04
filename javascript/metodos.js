/*
Métodos eficientes do JavaScript
*/

// Método de Array: map()
// O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array.
// Exemplo:

/*
const numeros = [1, 2, 3, 4, 5] // Array de números
const numerosDobrados = numeros.map(valor => valor * 2) // Dobrar os valores do array
for (let numero of numerosDobrados) { // Loop para imprimir os valores
console.log(numero) // Impressão dos valores
}


const nomes = ['Ana', 'Bia', 'Carlos', 'Daniel', 'Eduardo'] // Array de nomes
const nomesMaiusculos = nomes.map((nome, indice) => {
    console.log(`${indice + 1}: ${nome.toUpperCase()}`) // Transformar os nomes em maiúsculo e imprimir no console
})


// Método de Array: filter()
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
// Exemplo:


const numeros = [1, 2, 3, 4, 5] // Array de números
const numerosPares = numeros.filter(valor => valor % 2 === 0) // Filtrar os números pares do array
for (let numero of numerosPares) { // Loop para imprimir os valores
    console.log(numero) // Impressão dos valores
}

*/

// Método de Array: reduce()
// O método reduce() executa uma função redutora sobre cada elemento de um array, resultando em um único valor de retorno.
// Exemplo:

/*
const numeros = [1, 2, 3, 4, 5] // Array de números
const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0) // Soma dos valores do array
console.log(soma) // Impressão da soma no console
*/

// Método de Array: forEach()
// O método forEach() executa uma dada função em cada elemento de um array.
// Exemplo:

/*
const numeros = [1, 2, 3, 4, 5] // Array de números
numeros.forEach(valor => console.log(valor)) // Loop para imprimir os valores
*/

// Método de Array: find()

// O método find() retorna o primeiro elemento do array que satisfaz a função de teste fornecida.

const numeros = [1, 2, 3, 4, 5] // Array de números
const primeiroNumero = numeros.find(valor => valor > 2) // Encontrar o primeiro número maior que 2
console.log(primeiroNumero) // Impressão do primeiro número maior que 2 no console

// Método de Array: findIndex()
// O método findIndex() retorna o índice do primeiro elemento do array que satisfaz a função de teste fornecida.
// Exemplo:

const numeros = [1, 2, 3, 4, 5] // Array de números
const indice = numeros.findIndex(valor => valor > 2) // Encontrar o índice do primeiro número maior que 2
console.log(indice) // Impressão do índice do primeiro número maior que 2 no console

// Método de Array: some()
// O método some() verifica se pelo menos um elemento do array satisfaz a função de teste fornecida.
// Exemplo:

const numeros = [1, 2, 3, 4, 5] // Array de números
const temNumeroMaiorQueDois = numeros.some(valor => valor > 2) // Verificar se existe algum número maior que 2
console.log(temNumeroMaiorQueDois) // Impressão do resultado no console

// Método de Array: every()
// O método every() verifica se todos os elementos do array satisfazem a função de teste fornecida.
// Exemplo:

const numeros = [1, 2, 3, 4, 5] // Array de números
const todosNumerosMaioresQueZero = numeros.every(valor => valor > 0) // Verificar se todos os números são maiores que zero
console.log(todosNumerosMaioresQueZero) // Impressão do resultado no console

// Método de Array: sort()
// O método sort() ordena os elementos de um array localmente e retorna o array ordenado.
// Exemplo:

const numeros = [3, 1, 5, 2, 4] // Array de números
numeros.sort() // Ordenar os números
console.log(numeros) // Impressão dos números ordenados no console

// Método de Array: reverse()
// O método reverse() inverte a ordem dos elementos de um array.
// Exemplo:

const numeros = [1, 2, 3, 4, 5] // Array de números
numeros.reverse() // Inverter a ordem dos números
console.log(numeros) // Impressão dos números invertidos no console

// Método de Array: includes()
// O método includes() verifica se um array contém um determinado elemento e retorna true ou false conforme apropriado.
// Exemplo:

const numeros = [1, 2, 3, 4, 5] // Array de números
const temNumeroTres = numeros.includes(3) // Verificar se o número 3 está presente no array

console.log(temNumeroTres) // Impressão do resultado no console

// Método de Array: indexOf()
// O método indexOf() retorna o primeiro índice em que um elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.
// Exemplo:

const numeros = [1, 2, 3, 4, 3] // Array de números
const indiceDoNumeroTres = numeros.indexOf(3) // Encontrar o índice do número 3 no array

console.log(indiceDoNumeroTres) // Impressão do índice do número 3 no console

// Método de Array: lastIndexOf()
// O método lastIndexOf() retorna o último índice em que um elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.
// Exemplo:

const numeros = [1, 2, 3, 4, 3] // Array de números
const ultimoIndiceDoNumeroTres = numeros.lastIndexOf(3) // Encontrar o último índice do número 3 no array

console.log(ultimoIndiceDoNumeroTres) // Impressão do último índice do número 3 no console

// Método de Array: slice()
// O método slice() retorna uma parte do array, selecionada a partir do início até o final (ou até um índice especificado).
// Exemplo:

const numeros = [1, 2, 3, 4, 5] // Array de números
const numerosSelecionados = numeros.slice(1, 4) // Selecionar os números de 2 a 4

console.log(numerosSelecionados) // Impressão dos números selecionados no console

// Método de Array: splice()
// O método splice() adiciona ou remove elementos de um array.
// Exemplo:

const numeros = [1, 2, 3, 4, 5] // Array de números
numeros.splice(2, 1) // Remover o número 3 do array

console.log(numeros) // Impressão do array modificado no console

// Método de Array: concat()
// O método concat() é usado para mesclar dois ou mais arrays. Este método não altera os arrays existentes, mas retorna um novo array.
// Exemplo:

const numeros1 = [1, 2, 3] // Primeiro array de números
const numeros2 = [4, 5, 6] // Segundo array de números
const numerosConcatenados = numeros1.concat(numeros2) // Concatenar os dois arrays

console.log(numerosConcatenados) // Impressão do array concatenado no console

// Método de Array: join()

// O método join() junta todos os elementos de um array em uma string.
// Exemplo:

const numeros = [1, 2, 3, 4, 5] // Array de números
const numerosComoString = numeros.join(', ') // Juntar os números em uma string separada por vírgulas

console.log(numerosComoString) // Impressão da string no console




