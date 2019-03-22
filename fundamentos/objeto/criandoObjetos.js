// usando anotação literária
const obj1={}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 =  new Object
console.log(obj2)
    
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1= new Produto('Caneta', 7.99, 0.15)
const p2= new Produto('Notebook', 117.99, 0.5)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

function criarFunctionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase, 
        faltas, 
        getSalariobase(){
            return (salarioBase / 30)*(30 - faltas)
        }
    }
}

const f1 = criarFunctionario('Adolfo', 6500, 4)
const f2 = criarFunctionario('Maria', 5500, 2)
console.log(f1.getSalariobase(), f2.getSalariobase())

//Object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info":"Sou json"}')
console.log(fromJSON.info)