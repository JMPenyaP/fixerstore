require('dotenv').config();
const mercadopago = require('mercadopago');
const { ACCESS_TOKEN } = process.env;
if (ACCESS_TOKEN) {
    mercadopago.configure({
        access_token: ACCESS_TOKEN,
    })
}
const pagoOrder = (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
                currency_id:"COP"
			}
		],
		back_urls: {
			"success": "http://localhost:3000/",
			"failure": "http://localhost:3000/",
			"pending": "http://localhost:3000/"
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
            console.error("Error al crear la preferencia de pago:", error);
            res.status(500).json({ error: "Error al crear la preferencia de pago", message: error.message });
          });
}

module.exports = {
    pagoOrder: pagoOrder
};
