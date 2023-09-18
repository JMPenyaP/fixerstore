const { createUserHandler } = require('../controllers/usersControllers');

const user = {
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
    name: "Fabian",
    surname: "Idarraga",
    phone: "3152235421",
    address: "calle 30 Kra 15 #8",
    neighborhood: "Kenedy",
    department: "Cundinamarca"
};

const mockRequest = {
    body: user // Simula un cuerpo de solicitud con el objeto de usuario
};

const mockResponse = {
    status: function (statusCode) {
        // Define una función simulada de status que retorna el objeto de respuesta
        return mockResponse;
    },
    json: function (data) {
        // Define una función simulada de json que muestra los resultados
        console.log(data);
    }
};

async function createAdmin() {
    try {
        await createUserHandler(mockRequest, mockResponse);
        console.log("Usuario administrador creado con éxito.");
    } catch (error) {
        console.error(error);
        console.log("Error al crear el usuario administrador.");
    }
}


module.exports={
  createAdmin
}