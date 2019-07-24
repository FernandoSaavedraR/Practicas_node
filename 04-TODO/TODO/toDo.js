const fs = require("fs");
let listadoPorHacer = [];
const cargarDB = () => {
  try {
    listadoPorHacer = require("../DB/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

const guardarDB = () => {
  return new Promise((resolve, reject) => {
    data = JSON.stringify(listadoPorHacer, null, "\t");
    fs.writeFile(`./DB/data.json`, data, err => {
      if (err) reject(err);
      else {
        resolve(`todo ok`);
      }
    });
  });
};

const crear = descripcion => {
  let porHacer = {
    descripcion,
    completado: false
  };
  cargarDB();
  listadoPorHacer.push(porHacer);

  return guardarDB();
};

const Actualizar = (descripcion, completado) => {
  cargarDB();
  let elemento = listadoPorHacer.find(
    element => element.descripcion === descripcion
  );
  let mensaje = "";
  if (elemento) {
    elemento.completado = completado;
    mensaje = `${descripcion} se ha actualizado a ${completado}`;
    guardarDB();
  } else {
    mensaje = `No se ha encontrado la tarea ${descripcion}`;
  }
  return mensaje;
};
const borrar = descripcion => {
  cargarDB();
  let elemento;
  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
  elemento = listadoPorHacer[index]
 
  listadoPorHacer.splice(index,1)
  guardarDB()
  if(elemento)
    return true
  else
    return false
};


const getListado = (completado) => {
  cargarDB();
  if(completado){
    let array2 = listadoPorHacer.filter(elemento => elemento.completado === true)
    return array2
  }else{
    return listadoPorHacer;

  }
};

module.exports = {
  crear,
  getListado,
  Actualizar,
  borrar
};
