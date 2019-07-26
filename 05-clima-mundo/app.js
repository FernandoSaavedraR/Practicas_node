const argv = require("./config/yargs").argv;
const place = require('./Place/place')

const res = place.getLugarLatLng(argv.direccion)
res
.then(console.log)
.catch(console.log)