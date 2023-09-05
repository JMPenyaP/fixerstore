const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routers = require("./routes");
const server = express();
//===MIDDLEWARES
server.use(morgan("dev")); // Morgan con el formato "dev" para registrar las solicitudes en la consola.
server.use(express.json()); // Express para analizar las solicitudes entrantes con formato JSON.
server.use(cors()); // Cors para permitir solicitudes de diferentes dominios.
//======
server.use(routers); // Módulo de rutas importado para manejar las rutas y las solicitudes en la aplicación.

module.exports = server; // Exportamos la instancia de la aplicación
