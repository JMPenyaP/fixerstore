
const { User, Favorites, conn } = require('../db');


const addfavoriteControllers = async (userId, products) => {


    const user = await User.findByPk(userId);

    if (!user) {
        return "El usuario no existe";
    }

    // Verifica si 'products' es un objeto en lugar de un array
    if (!Array.isArray(products)) {
        // Convierte el objeto en un array con un solo elemento
        products = [products];
    }

    // Usar una transacción para asegurarse de que todas las operaciones sean atómicas
    await conn.transaction(async (t) => {
        // Iterar sobre los productos y agregarlos a la lista de favoritos del usuario
        for (const product of products) {
            const {
                id,
                name,
                categoryId,
                firstImage,
                carrouselImage,
                description,
                date,
                priceOfList,
                statusOffer,
                offer,
                stock,
                status,
            } = product;


            const existingFavorite = await Favorites.findOne({
                where: {
                    id,
                    // Agrega cualquier otra condición necesaria para verificar la igualdad del producto
                },
                transaction: t,
            });


            // Crea el favorito asociado al usuario
            if (!existingFavorite) {


                await user.addFavorite(
                    await Favorites.create({
                        id,
                        name,
                        categoryId,
                        firstImage,
                        carrouselImage,
                        description,
                        date,
                        priceOfList,
                        statusOffer,
                        offer,
                        stock,
                        status,
                    }),
                    { transaction: t }
                );
            }
        }
    });

    const favorites = await user.getFavorites();

    return favorites;


}


const getFavoriteControllers = async (userId) => {

    const user = await User.findByPk(userId);

    if (!user) return "El usuario no existe";

    const favorites = await user.getFavorites();

    return favorites;
}


const deleteFavoriteControllers = async (userId, favoriteId) => {


    const user = await User.findByPk(userId);

    if (!user) return "El usuario no existe";

    const favorite = await Favorites.findByPk(favoriteId);

    await Favorites.destroy({
        where: {
            id: favoriteId
        }
    })

    if (!favorite) return "El favorito no existe";

    await user.removeFavorite(favorite);

    return { message: "Favorito Eliminado Correctamente" }

}



module.exports = {
    getFavoriteControllers,
    addfavoriteControllers,
    deleteFavoriteControllers
}
