const opt = {
  base: {
    demand: true,
    alias: "b"
  },
  limite: {
    alias: "l",
    default: 10
  }
};
const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar", {
    ...opt
  })
  .command("crear", "Crea una tabla de multiplicar", {
    ...opt
  })
  .command("borrar", "borra una tabla de multiplicar", {
    base:opt.base
  })
  .help().argv;


module.exports ={
    argv
}