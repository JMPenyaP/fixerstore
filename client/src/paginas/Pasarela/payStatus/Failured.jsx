import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "./Pay.module.css";

const Failured = () => {
  const dataProfile = useSelector((state) => state.dataProfile);
  const [secondsRemaining, setSecondsRemaining] = useState(5);

  const navigate = useNavigate();
  const location = useLocation();

  const extractValuesFromQuery = () => {
    const searchParams = new URLSearchParams(location.search);
    const externalReference = searchParams.get("external_reference");
    const id = searchParams.get("collection_id");
    const payStatus = searchParams.get("status");
    const payment = searchParams.get("payment_type");

    try {
      // Intenta analizar la cadena JSON solo si existe y es válida
      if (externalReference && externalReference.trim().startsWith("name:")) {
        const externalReferenceData = externalReference
          .split(",")
          .reduce((acc, item) => {
            const [key, value] = item.trim().split(":");
            acc[key] = value;
            return acc;
          }, {});

        const { name, surname, phone, cc, retiro, totalAmount } = externalReferenceData;
        const updatedForm = {
          idMp: id,
          userId: dataProfile.userData.id,
          totalAmount,
          name: name,
          surname: surname,
          phone: phone,
          cc: cc,
          payment: payment,
          retiro: retiro,
          city: "",
          address: "",
          department: "",
          payStatus,
        };
        setForm(updatedForm); // Actualiza el estado con los valores extraídos
      }
    } catch (error) {
      console.error("Error al analizar la cadena JSON:", error);
    }
  };

  useEffect(() => {
    
    extractValuesFromQuery();

    const timer = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    // Redirige al usuario a localhost:3000/ después de 10 segundos
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 5000);

    // Limpia los temporizadores cuando el componente se desmonta
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate, secondsRemaining]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (dataProfile === null) {
        window.location.href = "/";
      }
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [dataProfile]);

  const [form, setForm] = useState({
    idMp: "",
    userId: "",
    name: "",
    surname: "",
    phone: "",
    cc: "",
    payment: "",
    retiro: "",
    city: "",
    address: "",
    department: "",
    totalAmount:0
  });

  useEffect(() => {
    if (secondsRemaining === 0) {
      axios.post("http://localhost:3001/order/", { form })
      navigate("/user/"+dataProfile.userData.id);
    }
  }, [navigate, secondsRemaining]);



  return (
    <div className={styles.containerR}>
      <h1 className={styles.h1R}>Pago Rechazado</h1>
      <p className={styles.pR}>Lo sentimos, ha ocurrido un problema con su pago.</p>
      <p className={styles.redirectR}>Redireccionando en <span className={styles.secondsRemainingR}>{secondsRemaining}</span> segundos...</p>
    </div>

  );
};

export default Failured;
