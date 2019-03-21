// closure é o escoppo criado quando afunção é declarada
// esse escopo permite a função acessar e manipular
//variaveis externas a função

//contexto lexico

const x = 'Global';

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) //Local