// pessoa  -> 123 -> {...}
const pessoa = { nome: 'Joao'}
console.log(pessoa)
console.log(pessoa.nome)

pessoa.nome = 'Pedro'
console.log(pessoa)
console.log(pessoa.nome)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // Transformamos o Objeto em constante

pessoa.nome = 'Maria' // não conseguimos alterar o valor do atributo do Objeto
console.log(pessoa)
console.log(pessoa.nome)

pessoa.end = 'Rua ABC' // não conseguimos criar novos atributos do Objeto
console.log(pessoa)
console.log(pessoa.end)

const pessoaConstante = Object.freeze({ nome: 'Rafael'})
pessoaConstante.nome = 'Beatriz'
console.log(pessoaConstante)