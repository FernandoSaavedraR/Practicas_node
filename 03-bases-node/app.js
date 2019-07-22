const {
  crearArchivo,
  leerArchivo,
  appendArchivo,
  BorrarArchivo
} = require("./multiplicar/multplicar");

console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split("=")[1];

// crearArchivo(base)
//   .then(archivo => {
//     console.log(`se ha creado el archivo ${archivo}`);
//   })
//   .catch(err => console.log(err));

// leerArchivo(base)
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{console.log(err);})
// appendArchivo("hola mundo", base).then(msg => {
//   console.log(`se ha concatenado ${msg}`);
// }).catch((err)=>console.log(err))
BorrarArchivo(base).then((msg)=>{
    console.log(msg);
}).catch(err=>console.log(err))