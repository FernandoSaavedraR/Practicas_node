let empleados = [
    {
      id: 1,
      nombre: "Fernando"
    },
    {
      id: 2,
      nombre: "melissa"
    },
    {
      id: 3,
      nombre: "juan"
    }
  ];
  let salario = [
    {
      id: 1,
      salario: 1000
    },
    {
      id: 2,
      salario: 2000
    }
  ];
  let getEmpleado = (id)=>{
    let empleadoDB= empleados.find(empleado =>empleado.id ===id)
    return new Promise((resolve,reject)=>{
        if(!empleadoDB){
            reject(`No existe empleado con id ${id}`)
        }else{
            
            resolve(empleadoDB)
        }

    })
}
let getSalario = (empleado)=>{
    let salarioDB = salario.find(salario=>salario.id === empleado.id)
    return new Promise((resolve,reject)=>{
        if(!salarioDB){
            reject(`No hay un salario para ${empleado.nombre.toUpperCase()}`)
        }else{
            resolve({
                ...empleado,
                ...salarioDB
            })
        }

    })
}
getEmpleado(31)
.then((empleado)=>{
    return getSalario(empleado)
})
.then((salario)=>{
    console.log(salario);
})
.catch((err)=>{
    console.log(err);
})