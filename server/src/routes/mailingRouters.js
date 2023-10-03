const { Router } = require("express");
const mailingRouter = Router();
const { contactController } = require('../controllers/mailingControllers');

mailingRouter.post("/contact", contactController);

module.exports = mailingRouter;