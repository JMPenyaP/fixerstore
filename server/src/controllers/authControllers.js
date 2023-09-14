const { User } = require("../db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//! Auth de Usuarios
exports.loginUsers = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
        }

        if (user.role !== 'admin' && user.role !== 'client') {
            return res.status(403).json({ success: false, message: 'Acceso denegado!' });
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, 'clave_secreta', { expiresIn: '1h' });

        res.status(200).json({ success: true, message: 'Inicio de sesión exitoso', token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error en el servidor' });
    }
};