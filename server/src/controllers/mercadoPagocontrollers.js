require('dotenv').config();
const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
	access_token: ACCESS_TOKEN,
});


const pagoOrder = (req, res) => {


	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
				currency_id: "COP"
			}
		],
		back_urls: {
			"success": "http://localhost:3000/payment/success",
			"failure": "http://localhost:3000/payment/failured",
		},
		auto_return: "approved",
		external_reference:`name:${req.body.name},surname:${req.body.lastName},phone:${req.body.phoneNumber},retiro:${req.body.place},cc:${req.body.dni}`,
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				response
			});
		}).catch(function (error) {
			console.log(error);
		});
}

module.exports = {
	pagoOrder: pagoOrder
};
