// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(1, 6)

// Armazenando uma arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(4, 5))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(4, 7))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')

