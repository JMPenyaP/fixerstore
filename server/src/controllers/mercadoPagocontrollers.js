require('dotenv').config();
const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
	access_token: ACCESS_TOKEN,
});


const pagoOrder = (req, res) => {

	const {name,lastName,phoneNumber,place,dni}= req.body.formData

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
		external_reference:`name:${name},surname:${lastName},phone:${phoneNumber},retiro:${place},cc:${dni},totalAmount:${req.body.price}`,
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
