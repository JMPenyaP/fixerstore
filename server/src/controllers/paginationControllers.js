const { Product } = require('../db');

const itemPerPage = 10;

const pagination = async (req, res) => {
    const { page } = req.query;
    const currentPage = parseInt(page) || 1;

    try {
        const offset = (currentPage - 1) * itemPerPage;

        const allProducts = await Product.findAndCountAll({
            offset,
            limit: itemPerPage,
        });

        const totalCount = allProducts.count;
        const totalPages = Math.ceil(totalCount / itemPerPage);


        res.json({
            products: allProducts.rows,
            currentPage,
            totalPages,
        });

    } catch (error) {

        res.status(500).json({ error: 'Error al obtener los productos.' });
    }
};

module.exports = {
    pagination
}
