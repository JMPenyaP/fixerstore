import React, { useState } from 'react';
import './ContanctForm.css';



const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    alert(`Mensaje enviado:\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}\nMensaje: ${formData.mensaje}`);
    // Puedes utilizar fetch() o axios para realizar una solicitud al servidor

    //Limpiar el formulario
    console.log('Formulario enviado:', formData);
    setFormData({
      nombre: '',
      email: '',
      mensaje: '',
      telefono: '',
    });
  };

  return (
    
    <div className="container">
    <div className='titulo-cabecera'>
    <div className='logo-cabecera'>
        <img src="https://fixershoes.com/assets/logo-slogan.png" alt="Logo" width="80px" height="70px" />
    </div>
    <div className='slogan-cabecera'>
        Cuidado y Restauración de Calzado
    </div>

    </div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;
