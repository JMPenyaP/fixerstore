const { Product } = require('../db');

const itemPerPage = 10;

const pagination = async (req, res) => {
    const { page } = req.query;
    const currentPage = parseInt(page) || 1;

    try {
        const offset = (currentPage - 1) * itemPerPage;

        const allProducts = await Product.findAll({
            offset,
            limit: itemPerPage,
        });

        res.json({
            products: allProducts,
            currentPage,
            totalPages: Math.ceil(allProducts.count / itemPerPage),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los productos.' });
    }
};

module.exports = {
    pagination
}
