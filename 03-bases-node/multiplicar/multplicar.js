//requires
const fs = require("fs");

//paquete que no son nativos
//const fs = requiere('express')
//archivos propios
//const fs = requiere('path/modulo')
//module.exports.crearArchivo
let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    let data = "";
    if (!Number(base)) {
      reject(`El valor ${base} no es un numero`);
      return;
    }
    let nombre = `tabla-${base}.txt`;
    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`tablas/${nombre}`, data, err => {
      if (err) reject(err);
      else {
        resolve(`${nombre}`);
      }
    });
  });
};
let leerArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    let nombre = `tabla-${base}.txt`;
    fs.readFile(`./tablas/${nombre}`, "utf8", (err, data) => {
      if (err) reject(err);
      else {
        data = data.split("\n").filter(elemento => elemento.length != "");
        let msg = "";
        if (limite > data.length) {
          msg = "hay menos elementos de los que solicitó";
          resolve({ data: data, msg });
        }else{
          resolve({ data: data.slice(0,limite), msg });
        }
        
      }
    });
  });
};
let appendArchivo = (mensaje, base) => {
  return new Promise((resolve, reject) => {
    let nombre = `tabla-${base}.txt`;
    fs.appendFile(`./tablas/${nombre}`, mensaje, err => {
      if (err) reject(err);
      resolve(mensaje);
    });
  });
};
let BorrarArchivo = base => {
  return new Promise((resolve, reject) => {
    let nombre = `tabla-${base}.txt`;
    fs.unlink(`./tablas/${nombre}`, err => {
      if (err) reject(err);
      resolve(`se ha eliminado el archivo ${nombre}`);
    });
  });
};
module.exports = {
  crearArchivo,
  leerArchivo,
  appendArchivo,
  BorrarArchivo
};
