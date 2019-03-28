function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}
const aula1 = new Aula('Bem vindos!', 123)
const aula2 = new Aula('Até breve!', 456)
console.log(aula1, aula2)

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula4 = novo(Aula, 'Bem vindos!', 123)
const aula5 = novo(Aula, 'Até breve!', 456)
console.log(aula4, aula5)