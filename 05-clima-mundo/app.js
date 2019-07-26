const argv = require("./config/yargs").argv;
const place = require("./Place/place");
const weather = require("./weather/weather");
// const res = place.getLugarLatLng(argv.direccion)
// res
// .then(resp=>{
//     console.log(resp);
//     return weather.getCLima(resp.latitud,resp.longitud)
// })
// .then(console.log)
// .catch(console.log)

const getInfo = async direccion => {
  try {
    const { latitud, longitud, direccion: name } = await place.getLugarLatLng(
      direccion
    );
    const { temp } = await weather.getCLima(latitud, longitud);
    return { latitud, longitud, name, temp };
  } catch (e) {
      throw new Error (`No se pudo determinar el clima de ${direccion}`)
  }
};
getInfo(argv.direccion)
  .then(resp => console.log(`El clima de ${resp.name} es de ${resp.temp}°C`))
  .catch(err => console.log(err.message));
