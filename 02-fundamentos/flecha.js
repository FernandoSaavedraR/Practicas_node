// function sumar(a,b){
//     return a+b
// }
let sumar =(a,b)=> a+b
// function saludar(nombre){
//     return "hola mundo"
// }
let saludar = nombre =>`hola ${nombre}`
//console.log(sumar(10,20));
console.log(saludar('Fernando'))

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`
    }
}
console.log(deadpool.getNombre())