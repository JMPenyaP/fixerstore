const { User } = require("../db");
const users = [
    {
        email: "admin@gmail.com",
        password: "123456",
        role: "admin",
        name: "Favian",
        surname: "Ibarra",
        phone: "312 5402667",
        address: "CC. Centro Mayor",
        neighborhood: "",
        department: "",
    },
    {
        email: "client@gmail.com",
        password: "123456",
        role: "client",
        name: "Fernando",
        surname: "Morante",
        phone: "313 2070155",
        address: "CC. Plaza Américas",
        neighborhood: "",
        department: "",
    },
];

const createUsers = async () => {
    const promises = users.map((user) => User.create({ email: user.email, password: user.password, role: user.role, name: user.name, surname: user.surname, phone: user.phone, address: user.address, neighborhood: user.neighborhood, department: user.department }));
    await Promise.all(promises);
};

module.exports = {
    createUsers,
};