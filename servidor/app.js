const express = require("express");

const bodyParser = require("body-parser");
const routes = require("./rutas/index");
const cors = require("cors");
const PORT = 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/film", routes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${ PORT }`);
});