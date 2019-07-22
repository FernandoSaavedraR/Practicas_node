
const {argv} = require('./config/yargs')
const colors = require('colors')
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
        console.group(`================Tabla del ${base}================`.green);
        for (element of data.data) 
        {
          console.log(element.green);
        }
        console.groupEnd();
        if (data.msg) console.group("==================Warning==================".red);
        console.log(data.msg.red);
        console.groupEnd();
      })
      .catch(err => {
        console.log(err);
      });

    break;
  case "crear":
    crearArchivo(base, limite)
      .then(archivo => {
        console.log(`se ha creado el archivo ${colors.green(archivo)}`);
      })
      .catch(err => console.log(err));
    break;
  case "borrar":
    BorrarArchivo(base).then((msg)=>{
        console.log(msg.red);
    }).catch(err=>console.log(err))
    break;
  default:
    console.log("comando no valido");
    break;
}

// appendArchivo("hola mundo", base).then(msg => {
//   console.log(`se ha concatenado ${msg}`);
// }).catch((err)=>console.log(err))
