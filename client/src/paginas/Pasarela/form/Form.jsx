import { useState, useEffect } from "react";
import Datas from "./Datas";
import Shipment from "./Shipment";
import Pay from "./Pay";
import styles from './Form.module.css'
import { validate } from './validate'
import { useSelector } from "react-redux";




const Form = () => {

    const [page,setPage]= useState(0)

    const dataProfile = useSelector((state) => state.dataProfile);
    useEffect(() => {
        if (dataProfile !== null) {
          const { userData } = dataProfile;
      
          setFormData({
            ...formData,
            name: userData.name,
            lastName: userData.surname,
            phoneNumber:userData.phone
          });
        }
      }, [dataProfile]);

    const [errors, setErrors] = useState({});
    const [formData,setFormData]= useState({
        name: '',
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

    const FormTitle = ["1-Datos Personales", "2-Retiro en sucursal", "3-Pago"]

    const handleInputChange = (event) => {

        const {name,value}= event.target

        const fieldErrors = validate({ ...formData, [name]: value });
        // Actualizar el estado de errores para el campo actual
        setErrors({ ...errors, [name]: fieldErrors[name] });
        
        setFormData({ ...formData, [name]: value });
        
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
            return <Pay formData={formData}/>;
        }
    }
    useEffect(() => {
        
        const initialErrors = validate(formData,page);
        setErrors(initialErrors);
      }, [formData,page]);

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
                {page !== 2 &&
                <div className={styles.divButton}>
                    <button
                    className={styles.button}
                    onClick={() => {
                        if (page < FormTitle.length - 1 && Object.keys(errors).length === 0) {
                        setPage(page + 1);
                        }
                    }}
                    disabled={page === FormTitle.length - 1 || Object.keys(errors).length > 0}
                    >
                    Siguiente
                    </button>
                    
                </div>}
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Form;