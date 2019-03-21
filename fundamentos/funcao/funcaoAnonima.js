const soma = function(x, y){
    return x + y
}

const imprimeSoma = function(a, b, operacao = soma){
    console.log(operacao(a,b));
}

imprimeSoma(2,3)
imprimeSoma(2,5)
imprimeSoma(10,5, function(x,y){
    return x - y
})
imprimeSoma(2,5, (x,y)=> x*y)

const pessoa = {
    falar: function(){
        console.log('opaaa...')
    }
}

pessoa.falar()