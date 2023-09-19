const { Router } = require("express");
const filtrosPreciosRouters = Router();

const filtrosPreciosHandlers = require('../handlers/filtrosPreciosHandlers');


filtrosPreciosRouters.get("/", filtrosPreciosHandlers);



module.exports = filtrosPreciosRouters;