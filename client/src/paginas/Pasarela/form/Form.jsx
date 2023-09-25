import { useState, useEffect } from "react";
import Datas from "./Datas";
import Shipment from "./Shipment";
import Pay from "./Pay";
import styles from './Form.module.css'
import { validate } from './validate'



const Form = () => {

    const [page,setPage]= useState(0)

    const [errors, setErrors] = useState({});
    const [formData,setFormData]= useState({
        name: "",
        lastName: "",
        phoneNumber: "",
        dni: "",
        place: "",
        //    city: "",
        // paymentInfo: {
        //     cardNumber: "",
        //     expirationDate: "",
        // }
    })

    const FormTitle = ["1-Datos Personales", "2-Domicilio y Entrega", "3-Pago"]

    const handleInputChange = (event) => {

        const {name,value}= event.target

        const fieldErrors = validate({ ...formData, [name]: value });
        // Actualizar el estado de errores para el campo actual
        setErrors({ ...errors, [name]: fieldErrors[name] });
        
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    };


    const PageDisplay = () =>{
        if (page === 0) {
            return <Datas errors={errors} formData={formData} onInputChange={handleInputChange} />;
        } else if (page === 1) {
            return <Shipment
            errors={errors}
            formData={formData}
            onInputChange={(field, value) => setFormData({ ...formData, [field]: value })}

        />
        } else {
            return <Pay />;
        }
    }
    useEffect(() => {
        // Realiza las validaciones iniciales cuando se carga la página
        const initialErrors = validate(formData);
        setErrors(initialErrors);
      }, [formData]);

    return ( 
        <>
        <div>
            <div></div>
            <div className={styles.divForm}>
                <div>
                    <h2 className={styles.h2}>{FormTitle[page]}</h2>
                </div>
                <div className={styles.info}>
                    {PageDisplay()}
                </div>
                <div>
                <button className={styles.btn} onClick={() => {if (page > 0) {setPage(page - 1);}}}disabled={page === 0}>Prev</button>
                <button
                className={styles.btn}
                onClick={() => {
                    if (page < FormTitle.length - 1 && Object.keys(errors).length === 0) {
                    setPage(page + 1);
                    }
                }}
                disabled={page === FormTitle.length - 1 || Object.keys(errors).length > 0}
                >
                Next
                </button>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Form;