require('dotenv').config();
const mercadopago = require('mercadopago');
const { ACCESS_TOKEN } = process.env;
if (ACCESS_TOKEN) {
    mercadopago.configure({
        access_token: ACCESS_TOKEN,
    })
}

const pagoOrder = async (req, res) => {
    const producto = req.body;
    try {
        const preference = {
            items: [
                {
                    title: producto.name,
                    unit_price: 1000,
                    currency_id: "COP",
                    quantity: 1,
                },
            ],
            back_urls: {
                success: "https://fixershoes.com/",
                failure: "https://fixershoes.com/error",
                pending: "https://fixershoes.com/pending",
            },
            auto_return: "approved",
        }
        const response = await mercadopago.preferences.create(preference);
    } catch (error) {
        return res.status(201).json(error.message);
    }
};

module.exports = {
    pagoOrder: pagoOrder
};
