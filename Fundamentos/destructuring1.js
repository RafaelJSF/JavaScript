// novo recurso do ES2015

const pessoa = {
    nome: "Rafael",
    idade: 32,
    endereco: { 
        logradouro: "Rua 3", 
        quadra: 11,
        lote: "34B"
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(nome, idade)

const { sobreNome, bemHumorado = true } = pessoa
console.log(sobreNome, bemHumorado)

const { endereco: { logradouro, quadra, lote, cep } } = pessoa
console.log(logradouro, quadra, lote, cep)