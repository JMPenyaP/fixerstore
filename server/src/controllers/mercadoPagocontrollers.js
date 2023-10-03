require('dotenv').config();

const cors = require("cors");
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
			"success": "https://dev.fixershoes.com/payment/success",
			"failure": "https://dev.fixershoes.com/payment/failured",
		},
		auto_return: "approved",
		external_reference:`name:${req.body.formData.name},surname:${req.body.formData.lastName},phone:${req.body.formData.phoneNumber},retiro:${req.body.formData.place},cc:${req.body.formData.dni}`,
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
