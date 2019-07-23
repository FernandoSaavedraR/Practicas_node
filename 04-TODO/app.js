const argv = require("./config/yargs").argv;
const colors = require("colors");
const porHacer = require("./TODO/toDo");
// console.log(argv);

let comando = argv._[0];
switch (comando) {
  case "Crear":
    porHacer
      .crear(argv.descripcion)
      .then(msg => console.log(msg))
      .catch(err => console.log(err));
    break;
  case "Listar":
      
    let listado = porHacer.getListado();
    for (let tarea of listado) {
      console.log("=======por hacer=======".green);
      console.log(tarea.descripcion);
      console.log('Estado:',tarea.completado);
      console.log("=======================".green);
    }
    break;
  case "Actualizar":
    console.log(porHacer.Actualizar(argv.descripcion,argv.completado))
    break;
  default:
    console.log("comando no reconocido");
    break;
}
