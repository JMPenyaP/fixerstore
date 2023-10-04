import React, { useState } from 'react';
import './ContanctForm.css';
import axios from 'axios'


const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    telefono: '',
  });

  const [enviado, setEnviado] = useState(false); // Estado para controlar el mensaje de envío

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/mailing/contact', formData);

      if (response.status === 200) {
        // La solicitud se completó con éxito, muestra el mensaje de éxito
        setEnviado(true);

        // Limpia el formulario
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: '',
        });
      } else {
        // La solicitud no se completó con éxito, puedes manejar el error según tus necesidades
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="containerContactanos">
      <div className='titulo-cabecera'>
        <div className='logo-cabecera'>
          <img src="https://fixershoes.com/assets/logo-slogan.png" alt="Logo" width="80px" height="70px" />
        </div>
        {/* <div className='slogan-cabecera'>
          Cuidado y Restauración de Calzado
        </div> */}
        <h1 className='titulo'>Contacto</h1>
      </div>
      
      <form className='Form' onSubmit={handleSubmit}>
        <label className='p' htmlFor="nombre">Nombre completo:</label>
        <input className='inputData'
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label className='p' >Email:</label>
        <input className='inputData'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
  
        <label className='p' >Teléfono:</label>
        <input className='inputData'
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />

        <label className='p' >Mensaje:</label>
        <textarea className='inputData'
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
        
        <button className='formbutton' type="submit">Enviar</button>
      </form>
      
      {enviado && (
        <div className="mensaje-enviado">
          <p style={{ color: 'green'}}>Tu mensaje ha sido enviado con éxito. ¡Gracias por contactarnos!</p>
        </div>
      )}
      <p>
      
      </p>
      <h1 className='titulo'>Visitanos</h1>
      <div className="sede-maps">
        <div className="map">
          <label  className='p' htmlFor="Sede 1 Fixer">Sede Plaza de las Americas</label>
          <p>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.861112596455!2d-74.1378034262314!3d4.618855595355888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ebaca191fa3%3A0x28079add05f37b00!2sCentro%20Comercial%20Plaza%20de%20las%20Am%C3%A9ricas!5e0!3m2!1ses-419!2sco!4v1696254033865!5m2!1ses-419!2sco"
            title="Mapa de Sede 1"
            width="500"
            height="350"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="map">
          <label className='p'  htmlFor="Sede 2 Fixer">Sede Centro Mayor</label>
          <p>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.010739183059!2d-74.12656632623165!3d4.5920950953825495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f992928b4cee9%3A0x539f03e456727685!2sCentro%20Mayor%20Centro%20Comercial!5e0!3m2!1ses-419!2sco!4v1696256658541!5m2!1ses-419!2sco"
            title="Mapa de Sede 2"
            width="500"
            height="350"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;