import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../redux/actions"
import style from "./RegistroUsuario.module.css"
import { NavLink} from "react-router-dom"
import { isBefore, parseISO } from "date-fns";
import axios from 'axios';
import { createUser } from '../../redux/Actions/createUser';



const RegistroUsuario = () => {
    const dispatch = useDispatch()
    const {handleSubmit, control, formState: {errors}, trigger, reset, watch} = useForm()
    const currentDate = new Date();
    const [departamentos, setDepartamentos] = useState([]);
    const [municipios, setMunicipios] = useState([]);
    const [selectedDepartamento, setSelectedDepartamento] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [erroresPass, setErroresPass] = useState([])
    const [isRepeatPasswordEnabled, setIsRepeatPasswordEnabled] = useState(false);
    const password = watch("password");
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const validatePassword = (e) => {
        const valor = e.target.value
        const hasUppercase = /[A-Z]/.test(valor);
        const hasLowercase = /[a-z]/.test(valor);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valor);
        const hasMinLength = valor.length >= 8;
        const hasNumber = /[0-9]/.test(valor);
    
        if (hasUppercase && hasLowercase && hasSpecialChar && hasMinLength && hasNumber) {
          return true; 
        }
        const errorMessages = [];
        if (!hasNumber) {
            errorMessages.push('Debe contener al menos un número.') 
        }
        if (!hasUppercase) {
            errorMessages.push('Debe contener al menos una letra mayúscula.')
        }
        if (!hasLowercase) {
            errorMessages.push('Debe contener al menos una letra minúscula.')
        }
        if (!hasSpecialChar) {
            errorMessages.push('Debe contener al menos un carácter especial.')
        }
        if (!hasMinLength) {
            errorMessages.push('Debe tener un mínimo de 8 caracteres.')
        }
        setErroresPass(errorMessages)
      };
    useEffect(() => {
      const fetchDepartamentos = async () => {
        try {
          const response = await axios.get("https://www.datos.gov.co/resource/xdk5-pm3f.json");
          const departamentosData = response.data.map((municipio) => municipio.departamento);
          const departamentosUnicos = [...new Set(departamentosData)];
          setDepartamentos(departamentosUnicos);
        } catch (error) {
          console.error("Error al obtener los departamentos:", error);
        }
      };
      fetchDepartamentos();
    }, []);
    const handleDepartamentoChange = async (e) => {
        const selected = e.target.value;
        setSelectedDepartamento(selected);
        try {
            const response = await axios.get("https://www.datos.gov.co/resource/xdk5-pm3f.json");
            const departamentosData = response.data.map((municipio) => municipio.departamento);
            const departamentosUnicos = [...new Set(departamentosData)];
            setDepartamentos(departamentosUnicos);
            const municipiosFiltrados = response.data
            .filter((municipio) => municipio.departamento === selected)
            .map((municipio) => municipio.municipio);
            setMunicipios(municipiosFiltrados);
          } catch (error) {
            console.error("Error al obtener los departamentos:", error);
          }
      };
      const verifyEmail = async (email) => {
        try {
            const URL = "http://localhost:3001/users/email";
            const query = `?email=${email}`;
            const endpoint = URL + query;
            const res = await axios.get(endpoint);
            if (res.status === 200) {
                const { success } = res.data;
                if (success === true) {
                    return true
                }else return false}

        } catch (error) {
            return error.message;
        }
    }
    useEffect(() => {
        if(errors.password || password === "") setIsRepeatPasswordEnabled(false);
        if(!errors.password && password !== "") setIsRepeatPasswordEnabled(true);
      }, [password, errors.password]);
    const passwordMatchRule = (value) => value === password || "Las contraseñas no coinciden"
    const onSubmit = async (data) => {
        const fechaNacimiento = new Date(data.birthDate);
        const fechaActual = new Date();
        const diferenciaMilisegundos = fechaActual - fechaNacimiento;
        const edad = Math.floor(diferenciaMilisegundos / (365.25 * 24 * 60 * 60 * 1000));
        delete data.repeatPassword;
        data.age = edad
        console.log(data)

    }
    console.log(erroresPass);
    return (
        <div className={style.div}>
            <div className={style.divComplementario}>
                <img className={style.logo} src="https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694710937/FIXERSHOES/LOGO-FIXER-SOLO-PNG_mwfsfe.png" alt="Logo" />
                <h1 className={style.titulo}>Crea tu cuenta</h1>
            </div>
            <div className={style.divForm}>
                <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.divDatos}>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="name">Nombre completo</label>
                            <div className={style.divInput}>
                                <Controller name="name"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Este campo es obligatorio', maxLength: {value: 30,message: 'El nombre no puede tener más de 30 caracteres'}, minLength: {value: 4,message: 'El nombre no puede tener menos de 4 caracteres'}} }
                                render={({ field }) => (
                                <input className={style.input} type="text" {...field} onChange={(e) => {field.onChange(e); trigger("name"); }}/>)}/>
                                <div className={style.errorMenssage}>
                                    {errors.name && <p className={style.simbolo}>¡</p>}
                                    {errors.name && <p className={style.errorText}>{errors.name.message}</p>}
                                    {errors.name && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="surname">Apellido completo</label>
                            <div className={style.divInput}>
                                <Controller name="surname"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Este campo es obligatorio', maxLength: {value: 30,message: 'El apellido no puede tener más de 30 caracteres'}, minLength: {value: 4,message: 'El apellido no puede tener menos de 4 caracteres'}} }
                                render={({ field }) => (
                                <input className={style.input} type="text" {...field} onChange={(e) => {field.onChange(e); trigger("surname"); }}/>)}/>
                                <div className={style.errorMenssage}>
                                {errors.surname&& <p className={style.simbolo}>¡</p>}
                                {errors.surname && <p className={style.errorText}>{errors.surname.message}</p>}
                                {errors.surname && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="gender"> Género </label>
                            <div className={style.divInput}>
                                <Controller name="gender"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Seleccione su género' }}
                                render={({ field }) => (
                                    <select className={style.select} {...field} onChange={(e) => {field.onChange(e); trigger("gender"); }}> 
                                        <option value="" disabled> Seleccione su género </option>
                                        <option value="Hombre"> Hombre </option>
                                        <option value="Mujer"> Mujer </option>
                                        <option value="Prefiero no decirlo"> Prefiero no decirlo</option>
                                    </select>)} />
                                <div className={style.errorMenssage}>
                                    {errors.gender && <p className={style.simbolo}>¡</p>}
                                    {errors.gender && <p className={style.errorText}>{errors.gender.message}</p>}
                                    {errors.gender && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="email"> Correo electronico </label>
                            <div className={style.divInput}>
                                <Controller name="email"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Este campo es obligatorio',     validate: async (value) => {
                                    if (value) {
                                      const existe = await verifyEmail(value);
                                      if (existe) {
                                        return 'Este correo electrónico ya está registrado';
                                      }
                                    }
                                    return true;
                                  } }}
                                render={({ field }) => (
                                    <input className={style.input} type="text" {...field} onChange={(e) => {field.onChange(e); trigger("email"); }}/>)}/>
                                <div className={style.errorMenssage}>
                                    {errors.email && <p className={style.simbolo}>¡</p>}
                                    {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
                                    {errors.email && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="password"> Contraseña </label>
                            <div className={style.divInput}>
                                <div className={style.contraseña}>
                                    <Controller name="password"
                                    control={control}
                                    defaultValue=""
                                    rules={{ 
                                        required: 'Este campo es obligatorio',
                                      validate: {
                                        uppercase: (value) =>
                                          /[A-Z]/.test(value) || 'Debe contener al menos una letra mayúscula.',
                                        lowercase: (value) =>
                                          /[a-z]/.test(value) || 'Debe contener al menos una letra minúscula.',
                                        specialChar: (value) =>
                                          /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value) || 'Debe contener al menos un carácter especial.',
                                        minLength: (value) =>
                                          value.length >= 8 || 'Debe tener un mínimo de 8 caracteres.',
                                        hasNumber: (value) =>
                                          /[0-9]/.test(value) || 'Debe contener al menos un número.',
                                      }
                                    }}
                                    render={({ field }) => (<input className={style.input} type={showPassword ? 'text' : 'password'} {...field} onChange={(e) => {field.onChange(e); trigger("password"); validatePassword(e)}}/>)}/>
                                    <span className={style.passwordtoggle} onClick={togglePasswordVisibility}>
                                        {showPassword ? (<><img className={style.img} src="https://api.iconify.design/material-symbols:visibility-off-outline.svg?color=%233cbbed" alt="eyeopne" /></>) : (<><img className={style.img} src="https://api.iconify.design/material-symbols:visibility-outline.svg?color=%233cbbed" alt="eyeopne" /></>)}
                                    </span>
                                </div>
                                <div className={style.errorMenssage}>
                                    {erroresPass.map((error, index) => (
                                    <span className={style.passOff} key={index}>{error}</span>))}
                                </div>
                            </div>
                        </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="repeatPassword"> Repetir contraseña </label>
                            <div className={style.divInput}>
                                <div className={style.contraseña}>
                                    <Controller name="repeatPassword"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "Este campo es obligatorio",
                                        validate: passwordMatchRule,
                                    }}
                                    disabled={isRepeatPasswordEnabled === false}
                                    render={({ field }) => (<input className={style.input} type={showPassword ? 'text' : 'password'} {...field} onChange={(e) => {field.onChange(e); trigger("repeatPassword"); }}/>)}/>
                                    <span className={style.passwordtoggle} onClick={togglePasswordVisibility}>
                                        {showPassword ? (<><img className={style.img} src="https://api.iconify.design/material-symbols:visibility-off-outline.svg?color=%233cbbed" alt="eyeopne" /></>) : (<><img className={style.img} src="https://api.iconify.design/material-symbols:visibility-outline.svg?color=%233cbbed" alt="eyeopne" /></>)}
                                    </span>
                                </div>
                                <div className={style.errorMenssage}>
                                    {errors.repeatPassword && <p className={style.simbolo}>¡</p>}
                                    {errors.repeatPassword && <p className={style.errorText}>{errors.repeatPassword.message}</p>}
                                    {errors.repeatPassword && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="birthDate">Fecha de nacimiento:</label>
                            <div className={style.divInput}>
                                <Controller
                                name="birthDate"
                                control={control}
                                defaultValue={currentDate}
                                rules={{ required: 'Este campo es obligatorio', validate: (value) => {
                                    const eighteenYearsAgo = new Date();
                                    eighteenYearsAgo.setFullYear(currentDate.getFullYear() - 18);
                                    if (isBefore(parseISO(value), eighteenYearsAgo)) {
                                      return true;
                                    }
                                    return 'Debes ser mayor de 18 años para registrarte.';
                                  }} }
                                render={({ field }) => (
                                <input type="date" className={style.select} {...field} onChange={(e) => {field.onChange(e); trigger("birthDate"); }} />)}/>
                                <div className={style.errorMenssage}>
                                    {errors.birthDate && <p className={style.simbolo}>¡</p>}
                                    {errors.birthDate && <p className={style.errorText}>{errors.birthDate.message}</p>}
                                    {errors.birthDate && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="departament"> Departamento </label>
                            <div className={style.divInput}>
                                <Controller name="departament"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Seleccione un departamento' }}
                                render={({ field }) => (
                                    <select className={style.select} {...field} onChange={(e) => {field.onChange(e); trigger("deparment"); handleDepartamentoChange(e) }}> 
                                        <option value="" disabled> Seleccione una Departamento </option>
                                        {departamentos.map((departament) => (
                                        <option value={departament}>
                                            {departament}</option>))}
                                    </select>)} />
                                <div className={style.errorMenssage}>
                                    {errors.departament && <p className={style.simbolo}>¡</p>}
                                    {errors.departament && <p className={style.errorText}>{errors.departament.message}</p>}
                                    {errors.departament && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="city"> Ciudad/Municipio </label>
                            <div className={style.divInput}>
                                <Controller name="city"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Seleccione una ciudad/municipio' }}
                                render={({ field }) => (
                                    <select className={style.select} {...field} onChange={(e) => {field.onChange(e); trigger("city"); }}> 
                                        <option value="" disabled> Seleccione una ciudad/municipio </option>
                                        {municipios.map((municipio) => (
                                        <option value={municipio}>
                                            {municipio}</option>))}
                                    </select>)} />
                                <div className={style.errorMenssage}>
                                    {errors.city && <p className={style.simbolo}>¡</p>}
                                    {errors.city && <p className={style.errorText}>{errors.city.message}</p>}
                                    {errors.city && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="address">Dirección para envíos</label>
                            <div className={style.divInput}>
                                <Controller name="address"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Este campo es obligatorio', maxLength: {value: 150,message: 'La dirección no puede tener más de 150 caracteres'}, minLength: {value: 10,message: 'La dirección no puede tener menos de 10 caracteres'}} }
                                render={({ field }) => (
                                <textarea className={style.input} type="text" {...field} onChange={(e) => {field.onChange(e); trigger("address"); }}/>)}/>
                                <div className={style.errorMenssage}>
                                    {errors.address && <p className={style.simbolo}>¡</p>}
                                    {errors.address && <p className={style.errorText}>{errors.address.message}</p>}
                                    {errors.address && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.divDireccion}>
                    </div>
                    <button type="submit" className={style.formbutton} >Registrarme</button>
                </form>
            </div>
        </div>
    )
}

export default RegistroUsuario