var a = "chocolate"// não é mais uma boa prática, use o let no lugar
let b = "laranja" // o let n varia
const c = 10 // uma constante não varia - n pode receber um novo valor
const d = "Não deu certo"
let obj = {
    name : "Bibs",
    age: 18
}

a = 111
b = "texto"

console.log(a)
console.log(b)

// Tipos de dados
// string
const name = 'Meu nome'

// number
const num = 1

// boolean - true e false
const isApproved = false

// nulo
const lastName = null

// undefined
let address

// object
const brand = {
    name: "adidas",
    size: ["P", "M", "G"]
}

// array
const languages = [
    "java",
    "javascript"
]

// Tipos de console
console.log(a)
console.warn(b)
console.error(d)
console.table(obj)
// limpar consoles após a visualização
// console.clear("Limpei") 
// ctrl + ; - comenta o código
