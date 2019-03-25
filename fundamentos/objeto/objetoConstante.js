// aponta para um endereço de memoria
const pessoa = { nome:'Augusto'}
pessoa.nome = 'Adolfo'
console.log(pessoa)

//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Ronaldo'
pessoa.end = 'Rua ana'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'Jesus'})
pessoaConstante.nome = 'Ronaldo'
console.log(pessoaConstante)

