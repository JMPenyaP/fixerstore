const axios = require('axios');

const generateMessageWhats = async (req, res) => {


    try {

        const { productName } = req.query;

        const message = await axios(`https://api.whatsapp.com/send?phone=573102909092&text=Hola%20estoy%20interesado(a)%20en%20saber%20mas%20informacion%20acerca%20del%20producto%20${productName}`);
        console.log(message)
        res.status(200).json(message.config.url);

    } catch (error) {

        res.status(404).json(error);

    }





}

module.exports = {

    generateMessageWhats
}