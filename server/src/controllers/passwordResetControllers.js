const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');
const { User, PasswordReset } = require('../db');
const bcrypt = require('bcryptjs');

//! Controlador para solicitar la recuperación de contraseña
const requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({ success: false, message: 'El correo electrónico no está registrado' });
        }

        const token = uuidv4();

        await PasswordReset.create({
            token,
            expirationDate: new Date(Date.now() + 3600000),
            status: 'pending',
            userId: user.id,
        });

        const transporter = nodemailer.createTransport({
            host: 'mail.fixershoes.com',
            port: 465,
            secure: true,
            auth: {
                user: 'no-reply@fixershoes.com',
                pass: 'lC!(7$5RGC[m{FX9jk',
            },
        });

        const mailOptions = {
            from: 'no-reply@fixershoes.com',
            to: email,
            subject: 'Recuperación de contraseña',
            text: `Haga clic en el siguiente enlace para restablecer su contraseña: https://fixershoes.com/reset/${token}`,
            html: `<p>Haga clic en el siguiente enlace para restablecer su contraseña: <a href="https://fixershoes.com/reset/${token}">CLIC AQUÍ</a></p>`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Se ha enviado un correo electrónico para restablecer la contraseña' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
};

//! Controlador para restablecer la contraseña
const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;

        const resetToken = await PasswordReset.findOne({ where: { token } });


        if (!resetToken || resetToken.expirationDate < new Date() || resetToken.status !== 'pending') {
            return res.status(400).json({ success: false, message: 'Token inválido o expirado' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const user = await User.findByPk(resetToken.userId);
        if (!user) {
            return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
        }

        user.password = hashedPassword;

        await user.save();

        resetToken.status = 'completed';
        await resetToken.save();

        res.status(200).json({ success: true, message: 'Contraseña restablecida con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
};

module.exports = { requestPasswordReset, resetPassword };
