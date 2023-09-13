const { Router } = require("express");
const promotionsRouters = Router();
const { createPromotionHandler, getAllPromotionsHandler } = require("../handlers/usersHandlers")

/* usersRouters.post("/", createPromotionHandler);
usersRouters.get("/", getAllPromotionsHandler); */

module.exports = promotionsRouters;