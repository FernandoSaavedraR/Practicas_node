const opc = {
  descripcion: {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea por hacer"
  }
};

const argv = require("yargs")
  .command("Crear", "Crea un elemento por hacer", {
    ...opc
  })
  .command("Actualizar", "Actualiza el estado completado de una tarea", {
    ...opc,
    completado: {
      default: true,
      alias: "c",
      desc: "Marca si una tarea se ha Terminado"
    }
  })
  .help().argv;

module.exports = {
  argv
};
