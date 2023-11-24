const { User } = require("../db");
const bcrypt = require("bcryptjs");
const Sequelize = require('sequelize');
const { createTransporter, sendEmail } = require('./utils/emailTransporter');

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
    //================================================
    const transporter = createTransporter();
    const mailOptions = {
      from: '"Fixer Shoes" <no-reply@fixershoes.com>',
      to: email,
      subject: '¡Bienvenido/a a nuestra comunidad en línea!',
      text: `¡Bienvenido/a a nuestra comunidad en línea!`,
      html: `
                <p>Estimado/a ${name},</p>
                <p>Estamos emocionados de tenerte como parte de nuestra comunidad. Tu cuenta ha sido creada con éxito y ahora tienes acceso a todas las características emocionantes de nuestro sitio web. Esperamos que disfrutes de tu tiempo aquí y encuentres contenido interesante y útil.</p>
                <p>Siempre estamos trabajando para mejorar tu experiencia, así que no dudes en proporcionarnos comentarios o sugerencias mediante el formulario de contacto. Queremos que tu tiempo aquí sea excepcional.</p>                
                <p>¡Gracias por unirte a nosotros y esperamos verte activamente en nuestro sitio web!</p>
                <p>Saludos,</p>
                <p><img src="https://fixershoes.com/assets/LOGO-FIXER-8-X-8-PNG.png"></p>`,
    };
    await sendEmail(transporter, mailOptions);
    //================================================
    res
      .status(201)
      .json({ success: true, message: "Registro de usuario exitoso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error 500 en el servidor" });
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
 const deleteUser = async(req,res)=>{
     const {id}=req.body
     console.log(id)
     try {
      const result = await User.destroy({
        where: {
          id: {
            [Sequelize.Op.eq]: id, // Busca el usuario por su ID
          },
        },
      });
      if(result===1){
        return res.status(200).json("Usuario eliminado")
      }else{
        res.status(200).json({message:"no se pudo eliminar el usuario "})
      }
     } catch (error) {
      res.status(500).json({ success: false, message: "Error en el servidor" })
     }
 }

module.exports = {
  getAllUsers,
  getUserByName,
  createUserHandler,
  getUserByEmail,
  updateUserController,
  deleteUser
};
