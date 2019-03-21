// function not returned
function imprimirSoma(a, b){
    console.log(a+b)
}
imprimirSoma(3,2) // 5
imprimirSoma(2) // NaN
imprimirSoma(3,7,8,6,5,4) // 10  soma os dois primeiros, exclui o restante
imprimirSoma() // NaN

// function com retorno
function soma(a,b = 1){
    return a+b
}

console.log(soma(2,3)) //5
console.log(soma(3))  //4
console.log(soma()) //NaN