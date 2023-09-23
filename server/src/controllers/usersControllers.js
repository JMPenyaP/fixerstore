const { User } = require("../db");
const bcrypt = require("bcryptjs");

//! Crear Usuario Cliente
const createUserHandler = async (req, res) => {
  const { email, password, role, name, surname, gender, age, birthDate, phone, address, city, department, country } = req.body;
  
  try {
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "El campo 'email' es obligatorio" });
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(200)
        .json({ success: false, message: "El email ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword,
      role,
      name,
      surname,
      gender,
      age,
      birthDate,
      phone,
      address,
      city,
      department,
      country,
    });

    res
      .status(201)
      .json({ success: true, message: "Registro de usuario exitoso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

//! Modificar Datos de Usuario
const updateUserController = async (req, res) => {
  const { userId } = req.params; // Obtén el ID del usuario a modificar
  const { email, password, role, name, surname, gender, age, birthDate, phone, address, city, department, country } = req.body;

  try {
    // Comprueba si el usuario existe
    const user = await User.findByPk(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Usuario no encontrado" });
    } 

    // Si se proporciona una nueva dirección de correo electrónico,
    // verifica si ya está en uso por otro usuario
    if (email && email !== user.email) {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res
          .status(400)
          .json({
            success: false,
            message: "El email ya está registrado por otro usuario",
          });
      }
    }

    // Actualiza los datos del usuario
    user.email = email || user.email;
    user.role = role || user.role;
    user.name = name || user.name;
    user.surname = surname || user.surname;
    user.gender = gender || user.gender;
    user.age = age || user.age;
    user.birthDate = birthDate || user.birthDate;
    user.phone = phone || user.phone;
    user.address = address || user.address;
    user.city = city || user.city;
    user.department = department || user.department;
    user.country = country || user.country;

    // Si se proporciona una nueva contraseña, la hashea y la actualiza
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    await user.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Datos de usuario actualizados con éxito",
        userData: user,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

//! Obtener todos los Usuarios
const getAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers; 
};

//! Obtener Usuario por Nombre
const getUserByName = async (name) => {
  const userName = await User.findAll({ where: { name: name } });
  return userName;
};

//! Obtener usuario por Email y devolver todos los campos
const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    return user
  } else {
    return false 
  }
}

module.exports = {
  getAllUsers,
  getUserByName,
  createUserHandler,
  getUserByEmail,
  updateUserController,
};
