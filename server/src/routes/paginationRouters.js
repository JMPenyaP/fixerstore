const { Router } = require("express");
const paginationRouters = Router();

const { pagination } = require('../controllers/paginationControllers');


paginationRouters.get("/", pagination);


module.exports = paginationRouters;
