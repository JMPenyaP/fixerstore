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
			"success": "http://localhost:3000/",
			"failure": "http://localhost:3000/",
			"pending": "http://localhost:3000/"
		},
		auto_return: "approved",
		form: req.body.formData.place
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
}

module.exports = {
	pagoOrder: pagoOrder
};
