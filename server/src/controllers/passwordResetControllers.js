const { v4: uuidv4 } = require('uuid');
const { User, PasswordReset } = require('../db');
const bcrypt = require('bcryptjs');
const { createTransporter, sendEmail } = require('./utils/emailTransporter');

//! Controlador para solicitar la recuperación de contraseña
const requestPasswordReset = async (req, res) => {
    const { email } = req.body;
    try {
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
        //================================================
        const transporter = createTransporter();
        const mailOptions = {
            from: '"Fixer Shoes" <no-reply@fixershoes.com>',
            to: email,
            subject: 'Recuperación de contraseña',
            text: `Haga clic en el siguiente enlace para restablecer su contraseña: https://fixershoes.com/reset/${token}`,
            html: `
                <p>Estimado/a ${user.name},</p>
                <p>Hemos registrado tu solicitud para restablecer tu contraseña. Si no has solicitado esta acción, te recomendamos hacer caso omiso de este mensaje.</p>
                <p>Si, por el contrario, has solicitado recuperar tu contraseña, por favor sigue el enlace a continuación para completar el proceso:</p>
                <p><a href="https://fixershoes.com/reset/${token}"><b>Enlace de Restablecimiento de Contraseña</b></a></p>
                <p>Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
                <p>Gracias por confiar en nosotros.</p>
                <p>Atentamente,</p>
                <p><img src="https://fixershoes.com/assets/LOGO-FIXER-8-X-8-PNG.png"></p>`,
        };
        await sendEmail(transporter, mailOptions);
        //===================================================
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

        if (!resetToken) {
            return res.status(201).json({ success: false, message: 'Token inválido o expirado' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        const user = await User.findByPk(resetToken.userId);
        if (!user) {
            return res.status(202).json({ success: false, message: 'Usuario no encontrado' });
        }

        user.password = hashedPassword;

        await user.save();

        resetToken.status = 'completed';
        await resetToken.save();
        //=================================================
        const transporter = createTransporter();
        const mailOptions = {
            from: '"Fixer Shoes" <no-reply@fixershoes.com>',
            to: user.email,
            subject: 'Tu contraseña ha sido restablecida',
            text: `Tu contraseña ha sido restablecida con éxito.`,
            html: `
                <p>Estimado/a ${user.name},</p>
                <p>Tu contraseña ha sido restablecida con éxito.</p>
                <p>Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
                <p>Gracias por confiar en nosotros.</p>
                <p>Atentamente,</p>
                <p><img src="https://fixershoes.com/assets/LOGO-FIXER-8-X-8-PNG.png"></p>`,
        };
        //await transporter.sendMail(mailOptions);
        await sendEmail(transporter, mailOptions);
        //=================================================
        res.status(200).json({ success: true, message: 'Contraseña restablecida con éxito' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
};

module.exports = { requestPasswordReset, resetPassword };
