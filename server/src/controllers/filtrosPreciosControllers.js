const { Product } = require('../db');



const filtroPreciosControllers = async (typeOfFilter) => {

    const products = await Product.findAll();

    const typefilter = typeOfFilter.toLowerCase();

    if (typefilter === 'precio minimo') {

        products.sort((a, b) => a.priceOfList - b.priceOfList);

    } else if (typefilter === 'precio maximo') {

        products.sort((a, b) => b.priceOfList - a.priceOfList);

    } else if (typefilter === 'a-z') {

        products.sort((a, b) => a.name.localeCompare(b.name));

    } else if (typefilter === 'z-a') {

        products.sort((a, b) => b.name.localeCompare(a.name));

    }


    return products;


}



module.exports = {

    filtroPreciosControllers
}