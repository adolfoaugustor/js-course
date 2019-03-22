const prod1 = {}
prod1.nome = 'celular ultra mega'
prod1.preco = 500.99
prod1['desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: "Camisa",
    valor: 23.9,
    desconto: 0.5,
    // obj:{
    //     blabla:1,
    //     obj:{
    //         blabla: 2
    //     }
    // }
}
console.log(prod2)

'{ "nome": "Camisa", "valor": "23.9", "desconto": "0.5" }' //json