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
let getEmpleado = async id => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
      throw new Error(`no existe un empleado para el id ${id}`);
    } else {
      return (empleadoDB);
    }
};
let getSalario = async empleado => {
  let salarioDB = salario.find(salario => salario.id === empleado.id);
  
    if (!salarioDB) {
      throw new Error(`no existe un salario para ${empleado.nombre}`);
    } else {
      return ({
        ...empleado,
        ...salarioDB
      });
    }
 
};
let GetInformacion = async id => {
  let empleado = await getEmpleado(id);
  let resp = await getSalario(empleado);
  return `${resp.nombre} tiene un salario de $${resp.salario}`;
};
GetInformacion(2)
  .then(mensaje => console.log(mensaje))
  .catch(err => console.log(err.message));
