const a = {name:"teste"}
const b = a
b.name = "OPA"
console.log(a, b)

let c = 3
let d = c

d++
console.log(c,d)
//_________________________________________________
let valor
console.log(valor)
// console.log(valor2)
valor = null
console.log(valor)

if (valor == undefined) {
    console.log('ok');
}else{
    console.log('not');
}

const produto = {}
console.log(produto.preco)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined
// delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)