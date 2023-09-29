const nodemailer = require('nodemailer');

function createTransporter() {
    return nodemailer.createTransport({
        host: "mi3-sr2.supercp.com",
        port: 465,
        secure: true,
        auth: {
            user: "no-reply@fixershoes.com",
            pass: "lC!(7$5RGC[m{FX9jk"
        },
        tls: { rejectUnauthorized: false }
    });
}

const sendEmail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error(error);
        throw new Error('Error al enviar el correo electrónico');
    }
};

module.exports = { createTransporter, sendEmail };