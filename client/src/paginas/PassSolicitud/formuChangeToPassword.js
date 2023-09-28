import React, { useState } from "react";
import axios from "axios";

const FormChangeToPassword = () => {
    const [data, setData] = useState({
        email: "",
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(
                `http://localhost:3001/request-reset`, data.email
            );
            // Manejar la respuesta, por ejemplo, mostrar un mensaje de éxito
            console.log("Correo enviado con éxito");
        } catch (error) {
            // Manejar el error, por ejemplo, mostrar un mensaje de error
            console.error("Error al enviar el correo", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            <button type="submit">Enviar Correo</button>
        </form>
    );
};

export default FormChangeToPassword;
