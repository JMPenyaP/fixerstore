const { createUserHandler } = require('../controllers/usersControllers');
const { User } = require("../db")
const user = {
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
    name: "Fabian",
    surname: "Idarraga",
    phone: "3152235421",
    address: "calle 30 Kra 15 #8",
    city: "Kenedy",
    department: "Cundinamarca"
}
/*{
    email: "usuario@gmail.com",
    password: "abcdef",
    role: "client",
    name: "Carlos",
    surname: "Gomez",
    phone: "3115889778",
    address: "calle 30 Kra 15 #8",
    city: "Kenedy",
    department: "Cundinamarca"
};*/

// const mockRequest = {
//     body: user // Simula un cuerpo de solicitud con el objeto de usuario
// };

// const mockResponse = {
//     status: function (statusCode) {
//         // Define una función simulada de status que retorna el objeto de respuesta
//         return mockResponse;
//     },
//     json: function (data) {
//         // Define una función simulada de json que muestra los resultados
//         console.log(data);
//     }
// };
/*
async function createAdmin() {

    user.forEach(async (us) => {
        try {
            await User.create(us);
            console.log("Usuario administrador creado con éxito.");
        } catch (error) {
            console.error(error);
            console.log("Error al crear el usuario administrador.");
        }
    })

}*/
async function createAdmin() {
    try {
        await User.create(user);
        console.log("Usuario administrador creado con éxito.");
    } catch (error) {
        console.error(error);
        console.log("Error al crear el usuario administrador.");
    }
}

module.exports = {
    createAdmin
}