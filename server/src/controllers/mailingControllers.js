const { createTransporter, sendEmail } = require('./utils/emailTransporter');
const { emailValidator } = require('./utils/fieldsValidator');

const contactController = async (req, res) => {
    const { nombre, email, telefono, mensaje } = req.body;
    console.log("aqui email", email, nombre, telefono, mensaje);
    if (!emailValidator(email)) {
        res.status(400).json({ message: 'La dirección de email no es válida' });
        return;
    }
    const transporter = createTransporter();

    const mailOptions = {
        from: email,
        to: 'info@fixershoes.com',
        subject: 'Formulario de contacto - Website',
        text: `Nombre: ${nombre}\nemail: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`,
    };

    try {
        await sendEmail(transporter, mailOptions);
        res.status(200).json({ message: 'Tu email ha sido enviado con éxito' });
    } catch (error) {
        console.error('Error al enviar el email:', error);
        res.status(500).json({ message: 'Error 500 al enviar el email' });
    }

}

module.exports = { contactController };