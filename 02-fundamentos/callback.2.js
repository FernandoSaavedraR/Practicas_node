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
let getEmpleado = (id,callback)=>{
    let empleadoDB= empleados.find(empleado =>empleado.id ===id)
    if(!empleadoDB){
        callback(`No existe empleado con id ${id}`)
    }else{
        
        callback(null,empleadoDB)
    }
}
let getSalario = (empleado,callback)=>{
    let salarioDB = salario.find(salario=>salario.id === empleado.id)
    if(!salarioDB){
        callback(`No hay un salario para ${empleado.nombre.toUpperCase()}`)
    }else{
        callback(null,{
            ...empleado,
            ...salarioDB
        })
    }
}

getEmpleado(3,(err,empleado)=>{
    if(err){return console.log(err);}
    getSalario(empleado,(err,salario)=>{
        if(err){return console.log(err);}
        console.log(salario);
    })
})