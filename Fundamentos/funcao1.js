// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // Pega apenas os dois primeiros

// Função com retorno
// b recebe 1 se não for apontando nenhum valor na chamada da função.
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 7))
console.log(soma(2))