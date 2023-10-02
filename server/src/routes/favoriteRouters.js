const { Router } = require('express');

const favoriteRouters = Router();

const { addfavoriteHandlers, deleteFavoriteHandlers, getFavoriteHandlers } = require("../handlers/favoriteHandlers.js");




favoriteRouters.post('/', addfavoriteHandlers);
favoriteRouters.post('/delete', deleteFavoriteHandlers)
favoriteRouters.get('/:UserId', getFavoriteHandlers);
module.exports = favoriteRouters;

