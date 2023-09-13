const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1]; // Obtén el token del encabezado de autorización

    if (!token) {
        return res.status(401).json({ message: 'No se proporcionó un token de autenticación' });
    }

    jwt.verify(token, 'clave_secreta', (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }
        req.user = user; // Puedes acceder a la información del usuario decodificado en las rutas protegidas
        next();
    });
}

module.exports = authenticateToken;
