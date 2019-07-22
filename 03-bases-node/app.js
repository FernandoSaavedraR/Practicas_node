const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar", {
    base: {
      demand: true,
      alias: "b"
    },
    limite: {
      alias: "l",
      default: 10
    }
  })
  .command("crear", "Crea una tabla de multiplicar", {
    base: {
      demand: true,
      alias: "b"
    },
    limite: {
      alias: "l",
      default: 10
    }
  })
  .command("borrar", "borra una tabla de multiplicar", {
    base: {
      demand: true,
      alias: "b"
    }
  })
  .help().argv;
const {
  crearArchivo,
  leerArchivo,
  appendArchivo,
  BorrarArchivo
} = require("./multiplicar/multplicar");

// console.log(process.argv);
// let parametro = argv[2];
// let base = parametro.split("=")[1];
let base = argv.base;
let limite = argv.limite;
let command = argv._[0];
switch (command) {
  case "listar":
    leerArchivo(base, limite)
      .then(data => {
        console.group("Data");
        for (element of data.data) console.log(element);
        console.groupEnd();
        if (data.msg) console.group("Warning");
        console.log(data.msg);
        console.groupEnd();
      })
      .catch(err => {
        console.log(err);
      });

    break;
  case "crear":
    crearArchivo(base, limite)
      .then(archivo => {
        console.log(`se ha creado el archivo ${archivo}`);
      })
      .catch(err => console.log(err));
    break;
  case "borrar":
    BorrarArchivo(base).then((msg)=>{
        console.log(msg);
    }).catch(err=>console.log(err))
    break;
  default:
    console.log("comando no valido");
    break;
}

// appendArchivo("hola mundo", base).then(msg => {
//   console.log(`se ha concatenado ${msg}`);
// }).catch((err)=>console.log(err))
