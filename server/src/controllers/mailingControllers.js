const { createTransporter, sendEmail } = require('./utils/emailTransporter');
const { emailValidator } = require('./utils/fieldsValidator');

const contactController = async (req, res) => {
    const { nombre, correo, telefono, mensaje } = req.body;
    if (!emailValidator(correo)) {
        res.status(400).json({ message: 'La dirección de correo no es válida' });
        return;
    }
    const transporter = createTransporter();

    const mailOptions = {
        from: correo,
        to: 'info@fixershoes.com',
        subject: 'Formulario de contacto - Website',
        text: `Nombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`,
    };

    try {
        await sendEmail(transporter, mailOptions);
        res.status(200).json({ message: 'Tu correo ha sido enviado con éxito' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ message: 'Error 500 al enviar el correo' });
    }

}

module.exports = { contactController };