
const { User, Favorites, Product } = require('../db');


const addfavoriteControllers = async (UserId, ProductId) => {


    const existingFavorite = await Favorites.findOne({
        where: {
            UserId,
            ProductId,
        },
    });

    if (existingFavorite) {
        // El producto ya está en la lista de favoritos, puedes manejarlo aquí
        return { message: 'El producto ya está en la lista de favoritos.' };
    }

    // Si no existe, crea una nueva entrada en la tabla Favorites
    await Favorites.create({
        UserId,
        ProductId,
    });

    return { message: 'Producto agregado a favoritos con éxito.' };


}


const getFavoriteControllers = async (UserId) => {

    // Busca los productos favoritos del usuario en la tabla Favorites
    const favorites = await Favorites.findAll({
        where: {
            UserId,
        },
        include: [{ model: Product }], // Incluye la información del producto favorito
    });

    if (!favorites || favorites.length === 0) {
        return { message: 'El usuario no tiene productos favoritos.' };
    }

    // Mapea la información de los productos favoritos
    const favoriteProducts = favorites.map((favorite) => favorite.Product);

    return favoriteProducts;


}


const deleteFavoriteControllers = async (UserId, ProductId) => {

    const favoriteEntry = await Favorites.findOne({
        where: {
            UserId,
            ProductId,
        },
    });

    if (!favoriteEntry) {
        // La entrada no existe, puedes manejarlo aquí
        return { message: 'El producto no está en la lista de favoritos.' };
    }

    // Si existe, elimina la entrada de la tabla Favorites
    await favoriteEntry.destroy();

    return { message: "Producto Eliminado de Favoritos" }

}



module.exports = {
    getFavoriteControllers,
    addfavoriteControllers,
    deleteFavoriteControllers
}
