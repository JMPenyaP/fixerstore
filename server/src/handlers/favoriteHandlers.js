const { getFavoriteControllers, addfavoriteControllers, deleteFavoriteControllers } = require("../controllers/favoriteControllers.js");


const getFavoriteHandlers = async (req, res) => {

    const { userId } = req.params;


    try {

        const getAllFav = await getFavoriteControllers(userId);


        res.status(200).json(getAllFav);



    } catch (error) {

        res.status(404).json({ error: error.message });

    }



}


const addfavoriteHandlers = async (req, res) => {

    const { userId, products } = req.body;
    try {

        console.log(userId, products);
        const favorite = await addfavoriteControllers(userId, products);


        return res.status(200).json(favorite);

    } catch (error) {

        return res.status(404).json({ error: error.message });


    }

}


const deleteFavoriteHandlers = async (req, res) => {

    try {

        const { userId, favoriteId } = req.body;

        const deleteFav = await deleteFavoriteControllers(userId, favoriteId);


        res.status(200).json({ message: deleteFav });

    } catch (error) {

        res.status(404).json({ error: error.message })
    }


}


module.exports = {

    getFavoriteHandlers,
    addfavoriteHandlers,
    deleteFavoriteHandlers

}