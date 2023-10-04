import styles from './Form.module.css'


const Datas = ({errors,formData, onInputChange}) => {
    return ( 
        <>
        <div className={styles.divDatas}>

            <div className={styles.subDiv}>
                <label className={styles.label} htmlFor="nombre">
                    Nombre{errors.name && <span className={styles.errors}>( {errors.name} )</span>}</label>
                <input
                    value={formData.name}
                    id='nombre'
                    name='name'
                    className={styles.datas}
                    type="text"
                    placeholder="Ingresar Nombre"
                    onChange={onInputChange}
                />
            </div>   
            <div className={styles.subDiv}>
                <label className={styles.label} htmlFor="lastName">
                    Apellido{errors.lastName && <span className={styles.errors}>( {errors.lastName} )</span>}</label>
                <input
                    id="lastName"
                    name="lastName"
                    className={styles.datas}
                    type="text"
                    placeholder="Ingresar Apellido"
                    value={formData.lastName}
                    onChange={onInputChange}
                />
            </div>
            
            <div className={styles.subDiv}>
                <label className={styles.label} htmlFor="phone">
                    Teléfono{errors.phoneNumber && <span className={styles.errors}>( {errors.phoneNumber} )</span>}</label>
                    <input
                        id="phone"
                        name="phoneNumber"
                        className={styles.datas}
                        type="text"
                        placeholder="Ingresar N° Celular"
                        value={formData.phoneNumber}
                        onChange={onInputChange}
                        maxLength={10}
                    />
                    
            </div>
            <div className={styles.subDiv}>
                <label className={styles.label} htmlFor="CC">
                    CC / DNI{errors.dni && <span className={styles.errors}>( {errors.dni} )</span>}</label>
                    <input
                        id="CC"
                        name="dni"
                        className={styles.datas}
                        type="text"
                        placeholder="Ingresar CC / DNI"
                        value={formData.dni}
                        onChange={onInputChange}
                        maxLength={10}
                    />
                    
            </div>
        </div>
        </>
     );
}
 
export default Datas;