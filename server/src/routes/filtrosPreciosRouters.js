const { Router } = require("express");
const filtrosPreciosRouters = Router();

const filtrosPreciosHandlers = require('../handlers/filtrosPreciosHandlers');

//Filtros de precios
filtrosPreciosRouters.get("/", filtrosPreciosHandlers);



module.exports = filtrosPreciosRouters;