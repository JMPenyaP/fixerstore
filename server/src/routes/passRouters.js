const { Router } = require("express");
const passRouter = Router();
const { requestPasswordReset, resetPassword } = require('../controllers/passwordResetControllers');

passRouter.post("/request-reset", requestPasswordReset);
passRouter.post("/reset/:token", resetPassword);

module.exports = passRouter;