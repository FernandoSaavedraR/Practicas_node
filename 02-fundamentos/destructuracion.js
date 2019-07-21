let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function (){
        return `${this.nombre} ${this.apellido} -poder: ${this.poder}`
    }
}
// console.log(deadpool.getNombre())
let {nombre:Name,apellido,poder, sexo=true} = deadpool
console.log(`${Name} ${apellido} con poder ${poder} ${sexo}`)