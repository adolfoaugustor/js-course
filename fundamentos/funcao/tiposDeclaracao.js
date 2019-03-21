// function declaration
/* se passado os parametros para execultar
esta função ante dela ser criada ainda sim irá
execultar, pois o compilador js vai ler todas
fuções e somente execultarar a chamada
*/
function soma(x,y){
    return x+y
}

//function expression
const sub = function(x,y){
    return x-y
} //só pode ser chamada após ser declarada

//named function expression
const multi = function multi(x,y){
    return x*y
} //só pode ser chamada após ser declarada