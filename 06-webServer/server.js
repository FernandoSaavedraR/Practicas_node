const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000
require('./hbs/helpers/helpers')
app.use(express.static(__dirname + "/public"));
//procesar templates
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");


app.get("/", (req, res) => {
  res.render("home", { nombre: "Fernando Saavedra" });
});
app.get("/about", (req, res) => {
  res.render("about", {nombre: "Fernando Saavedra" });
});
app.listen(port, () => {
  console.log(`escuchando peticiones en el puerto ${port} `);
});
