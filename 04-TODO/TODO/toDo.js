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
    data = JSON.stringify(listadoPorHacer,null,'\t');
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
    mensaje = `${descripcion} se ha actualizado a ${completado}`
    guardarDB();
  }else{
    mensaje = `No se ha encontrado la tarea ${descripcion}`
  }
  return mensaje
};

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};

module.exports = {
  crear,
  getListado,
  Actualizar
};
