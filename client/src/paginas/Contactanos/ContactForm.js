import React, { useState } from 'react';
import './ContanctForm.css';
import axios from "axios";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
      console.log(formData);
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/mailing/contact', 
       formData,
      );

      if (response.status === 200) {
        // La solicitud se completó con éxito, puedes mostrar un mensaje de éxito
        alert('Mensaje enviado con éxito');
        
        // Limpiar el formulario
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: '',
        });
      } else {
        // La solicitud no se completó con éxito, maneja el error según tus necesidades
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
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
