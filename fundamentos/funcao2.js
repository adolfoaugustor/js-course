//armazenando uma nova variavel
const imprimiSoma = function(a,b){
    console.log(a+b)
}
imprimiSoma(3,4)

// armazenando uma funcao arrow em uma variavel
const soma = (a,b) =>{
    return a + b
}
console.log(soma(2,3))

// retorno implicito
const subtracao = (a,b) => a-b
console.log(subtracao(2,3))

const imprimi2 = a => console.log(a)
imprimi2("de mais...")