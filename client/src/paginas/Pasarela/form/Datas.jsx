import styles from './Form.module.css'


const Datas = ({errors,formData, onInputChange}) => {
    return ( 
        <>
        <div className={styles.divDatas}>

            <div className={styles.subDiv}>
                <label htmlFor="nombre">
                    Nombre{errors.name && <span className={styles.errors}>( {errors.name} )</span>}
                <input
                    value={formData.name}
                    id='nombre'
                    name='name'
                    className={styles.datas}
                    type="text"
                    placeholder="Ingresar Nombre"
                    onChange={onInputChange}
                /></label>
             </div>   
             <div className={styles.subDiv}>
                <label htmlFor="lastName">
                    Apellido{errors.lastName && <span className={styles.errors}>( {errors.lastName} )</span>}
                <input
                    id="lastName"
                    name="lastName"
                    className={styles.datas}
                    type="text"
                    placeholder="Ingresar Apellido"
                    value={formData.lastName}
                    onChange={onInputChange}
                /></label>
            </div>
            
            <div className={styles.subDiv}>
                <label htmlFor="phone">
                    Teléfono{errors.phoneNumber && <span className={styles.errors}>( {errors.phoneNumber} )</span>}
                    <input
                        id="phone"
                        name="phoneNumber"
                        className={styles.datas}
                        type="number"
                        placeholder="Ingresar N° Celular"
                        value={formData.phoneNumber}
                        onChange={onInputChange}
                    /></label>
                    
            </div>
            <div className={styles.subDiv}>
                <label htmlFor="CC">
                    CC / DNI{errors.dni && <span className={styles.errors}>( {errors.dni} )</span>}
                    <input
                        id="CC"
                        name="dni"
                        className={styles.datas}
                        type="number"
                        placeholder="Ingresar CC / DNI"
                        value={formData.dni}
                        onChange={onInputChange}
                    /></label>
                    
            </div>
        </div>
        </>
     );
}
 
export default Datas;