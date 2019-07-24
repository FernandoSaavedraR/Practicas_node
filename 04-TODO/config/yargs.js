const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea por hacer"
};
const completado = {
  default: true,
  alias: "c",
  desc: "Marca si una tarea se ha Terminado"
};
const argv = require("yargs")
  .command("Crear", "Crea un elemento por hacer", {
    descripcion
  })
  .command("Actualizar", "Actualiza el estado completado de una tarea", {
    descripcion,
    completado
  })
  .command("Borrar", "Borra una tarea existente", {
    descripcion
  })
  .command("Listar", "lista las tareas existentes",{
      completado:{
        ...completado,
        default: false,
        desc:"Enlista las tareas terminadas"
      }
   })
  .help().argv;

module.exports = {
  argv
};
