const { Router } = require('express')
const { generateMessageWhats } = require('../handlers/whatsappHandler');
const whatsappRouters = Router();




whatsappRouters.get('/', generateMessageWhats);


module.exports = whatsappRouters;

















