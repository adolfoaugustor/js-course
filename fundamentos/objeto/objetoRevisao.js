const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor:55444,
    proprietario: {
        nome:'Adolfo',
        idade: 29,
        endereco: {
            logradouro:'Rua c',
            numero: 222
        }
    },
    consutores: [{
        nome: "junior",
        idade: 22
    },{
        nome: "Maria",
        idade: 24
    }],
    calcularValorDeSeguro: function(){
        // ....
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Rua da Asa'
console.log(carro)

delete carro.consutores
delete carro.proprietario.endereco
delete carro.calcularValorDeSeguro
console.log(carro)
console.log(carro.consutores)