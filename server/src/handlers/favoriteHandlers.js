const { getFavoriteControllers, addfavoriteControllers, deleteFavoriteControllers } = require("../controllers/favoriteControllers.js");


const getFavoriteHandlers = async (req, res) => {

    const { UserId } = req.params;


    try {

        const getAllFav = await getFavoriteControllers(UserId);


        res.status(200).json(getAllFav);



    } catch (error) {

        res.status(404).json({ error: error.message });

    }


}


const addfavoriteHandlers = async (req, res) => {

    const { UserId, ProductId } = req.body;

    console.log(UserId, ProductId)
    try {

        const favorite = await addfavoriteControllers(UserId, ProductId);

        return res.status(200).json(favorite);

    } catch (error) {

        return res.status(404).json({ error: error.message });


    }

}


const deleteFavoriteHandlers = async (req, res) => {

    try {

        const { UserId, ProductId } = req.body;

        const deleteFav = await deleteFavoriteControllers(UserId, ProductId);


        res.status(200).json(deleteFav);

    } catch (error) {

        res.status(404).json({ error: error.message })
    }


}


module.exports = {

    getFavoriteHandlers,
    addfavoriteHandlers,
    deleteFavoriteHandlers

}