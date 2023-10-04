import { useForm, Controller } from 'react-hook-form';
import { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import style from "./datos.module.css"
import { useNavigate } from "react-router-dom";
import { isBefore, parseISO, set } from "date-fns";
import axios from 'axios';
import setModify from "../../../redux/Actions/setModify"
import * as actions from "../../../redux/actions"


const Datos = () => {
    const dispatch = useDispatch()
    const [existe, setExiste] = useState(null);
    const navigate = useNavigate()
    const {handleSubmit, control, formState: {errors}, trigger, reset, watch} = useForm()
    const currentDate = new Date();
    const [departamentos, setDepartamentos] = useState([]);
    const [municipios, setMunicipios] = useState([]);
    const userModify = useSelector((state) => state.userChanges);
    const [userMod, setUserMod] = useState(null)
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    const [erroresPass, setErroresPass] = useState([])
    const [isRepeatPasswordEnabled, setIsRepeatPasswordEnabled] = useState(false);
    const [validate,setValidate] = useState(false)
    const password = watch("password");
    const department = watch("department");
    const [confirmRegistro, setConfirmRegistro] = useState(false);
    const [formDisabled, setFormDisabled] = useState(false);
    const dataProfile = useSelector((state) => state.dataProfile ?? null);
    const [userDatos, setUserDatos] = useState("")
    useEffect(()=> {
        if(dataProfile !== null) {
            const userData = dataProfile.userData
            setUserDatos(userData)
        }
    }, [dataProfile])
    const [selectedDepartamento, setSelectedDepartamento] = useState("")
    useEffect(() => {
        try {
            setUserMod(userModify)
        } catch (error) {
            console.error('Error al obtener registro:', error);}}, [userModify]);
    const togglePasswordVisibilityPass = () => {
        setShowPassword(!showPassword);
      };
      const togglePasswordVisibilityPassRe = () => {
        setShowPasswordRepeat(!showPasswordRepeat);
      };
      const validatePassword = (e) => {
        const valor = e.target.value;
        const hasUppercase = /[A-Z]/.test(valor);
        const hasLowercase = /[a-z]/.test(valor);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\/\-]/.test(valor);
        const hasMinLength = valor.length >= 8;
        const hasNumber = /[0-9]/.test(valor);
      
        const errorMessages = [];
        if(valor === "") {
            errorMessages.push('Este campo es obligatorio')
        }
        if (!hasNumber) {
          errorMessages.push('Debe contener al menos un número.');
        }
        if (!hasUppercase) {
          errorMessages.push('Debe contener al menos una letra mayúscula.');
        }
        if (!hasLowercase) {
          errorMessages.push('Debe contener al menos una letra minúscula.');
        }
        if (!hasSpecialChar) {
          errorMessages.push('Debe contener al menos un carácter especial.');
        }
        if (!hasMinLength) {
          errorMessages.push('Debe tener un mínimo de 8 caracteres.');
        }
        setErroresPass(errorMessages);
        setValidate(errorMessages.length === 0)
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
    useEffect(() => {
        handleDepartamentoChange({ target: { value: department } });
      }, [selectedDepartamento]);
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
                if (success === true) {setExiste(true); return true}
                else setExiste(false);return false
            }
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
        data.email = userDatos.email
        data.id = userDatos.id
        dispatch(actions.modify(data))
        setTimeout(()=> {dispatch(setModify());setUserMod(null)}, 1000)
    }
    return (
        <div className={style.div}>
            <div className={style.divComplementario}>
                <h1 className={style.titulo}>Actualiza tus datos</h1>
            </div>
            <div className={style.divForm}>
                <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.divDatos}>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="name">Nombre completo</label>
                            <div className={style.divInput}>
                                <Controller name="name"
                                control={control}
                                defaultValue={userDatos.name || dataProfile.userData.name}
                                rules={{ required: 'Este campo es obligatorio', maxLength: {value: 30,message: 'El nombre no puede tener más de 30 caracteres'}, minLength: {value: 4,message: 'El nombre no puede tener menos de 4 caracteres'}} }
                                render={({ field }) => (
                                <input className={style.input} type="text" {...field} value={field.value} onChange={(e) => {field.onChange(e); trigger("name"); }}/>)}/>
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
                                defaultValue={userDatos.surname || dataProfile.userData.surname}
                                rules={{ required: 'Este campo es obligatorio', maxLength: {value: 30,message: 'El apellido no puede tener más de 30 caracteres'}, minLength: {value: 4,message: 'El apellido no puede tener menos de 4 caracteres'}} }
                                render={({ field }) => (
                                <input className={style.input} type="text" {...field} value={field.value} onChange={(e) => {field.onChange(e); trigger("surname"); }}/>)}/>
                                <div className={style.errorMenssage}>
                                {errors.surname&& <p className={style.simbolo}>¡</p>}
                                {errors.surname && <p className={style.errorText}>{errors.surname.message}</p>}
                                {errors.surname && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="phone">Celular</label>
                            <div className={style.divInput}>
                                <Controller name="phone"
                                control={control}
                                defaultValue={userDatos.phone || dataProfile.userData.phone}
                                rules={{ required: 'Este campo es obligatorio', maxLength: {value: 10,message: 'Ingrese un celular válido'}, minLength: {value: 10,message: 'Ingrese un celular válido'}} }
                                render={({ field }) => (
                                <input className={style.input} type="number" {...field} value={field.value} onChange={(e) => {field.onChange(e); trigger("phone"); }}/>)}/>
                                <div className={style.errorMenssage}>
                                {errors.phone && <p className={style.simbolo}>¡</p>}
                                {errors.phone && <p className={style.errorText}>{errors.phone.message}</p>}
                                {errors.phone && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="email"> Correo electronico </label>
                            <div className={style.divInput}>
                                <Controller name="email"
                                control={control}
                                disabled
                                defaultValue={userDatos.email || dataProfile.userData.email}
                                rules={{
                                    pattern: {
                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                      message: 'Este no es un correo electrónico válido',
                                    },
                                    validate: async (value) =>  {
                                        if (value !== userDatos.email) {
                                            const success = await verifyEmail(value)
                                            if (success) return "Este correo ya registrado, intenta con uno nuevo"
                                            else return true
                                        }
                                    }
                                }}
                                render={({ field }) => (
                                    <input className={style.input} type="text" disabled {...field} value={userDatos.email} onChange={(e) => {field.onChange(e); trigger("email")}}/>)}/>
                                <div className={style.errorMenssage}>
                                    {errors.email && <p className={style.simbolo}>¡</p>}
                                    {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
                                    {errors.email && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                        {/* <div className={style.divCampo}>
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
                                    <span className={style.passwordtoggle} onClick={togglePasswordVisibilityPass}>
                                        {showPassword ? (<><img className={style.img} src="https://api.iconify.design/material-symbols:visibility-off-outline.svg?color=%233cbbed" alt="eyeopne" /></>) : (<><img className={style.img} src="https://api.iconify.design/material-symbols:visibility-outline.svg?color=%233cbbed" alt="eyeopne" /></>)}
                                    </span>
                                </div>
                                {validate !== true ? (<div className={style.errorMenssagePass}>
                                    {erroresPass.map((error, index) => (
                                    <span className={style.errorText} key={index}>{error}</span>))}
                                </div>):(null)}
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
                                    render={({ field }) => (<input className={style.input} type={showPasswordRepeat ? 'text' : 'password'} {...field} onChange={(e) => {field.onChange(e); trigger("repeatPassword"); }}/>)}/>
                                    <span className={style.passwordtoggle} onClick={togglePasswordVisibilityPassRe}>
                                        {showPasswordRepeat ? (<><img className={style.img} src="https://api.iconify.design/material-symbols:visibility-off-outline.svg?color=%233cbbed" alt="eyeopne" /></>) : (<><img className={style.img} src="https://api.iconify.design/material-symbols:visibility-outline.svg?color=%233cbbed" alt="eyeopne" /></>)}
                                    </span>
                                </div>
                                <div className={style.errorMenssage}>
                                    {errors.repeatPassword && <p className={style.simbolo}>¡</p>}
                                    {errors.repeatPassword && <p className={style.errorText}>{errors.repeatPassword.message}</p>}
                                    {errors.repeatPassword && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div> */}
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="birthDate">Fecha de nacimiento:</label>
                            <div className={style.divInput}>
                                <Controller
                                name="birthDate"
                                control={control}
                                defaultValue={userDatos.birthDate || dataProfile.userData.birthDate}
                                rules={{ required: 'Este campo es obligatorio', validate: (value) => {
                                    const eighteenYearsAgo = new Date();
                                    eighteenYearsAgo.setFullYear(currentDate.getFullYear() - 18);
                                    if (isBefore(parseISO(value), eighteenYearsAgo)) {
                                      return true;
                                    }
                                    return 'Debes ser mayor de 18 años para registrarte.';
                                  }} }
                                render={({ field }) => (
                                <input type="date" className={style.select} {...field} value={field.value} onChange={(e) => {field.onChange(e); trigger("birthDate"); }} />)}/>
                                <div className={style.errorMenssage}>
                                    {errors.birthDate && <p className={style.simbolo}>¡</p>}
                                    {errors.birthDate && <p className={style.errorText}>{errors.birthDate.message}</p>}
                                    {errors.birthDate && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                        <div className={style.divCampo}>
                            <label className={style.label} htmlFor="gender"> Género </label>
                            <div className={style.divInput}>
                                <Controller name="gender"
                                control={control}
                                defaultValue={userDatos.gender || dataProfile.userData.gender}
                                rules={{ required: 'Seleccione su género' }}
                                render={({ field }) => (
                                    <select className={style.select} {...field} value={field.value} onChange={(e) => {field.onChange(e); trigger("gender"); }}> 
                                        <option value=""> Seleccione su género </option>
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
                            <label className={style.label} htmlFor="department"> Departamento </label>
                            <div className={style.divInput}>
                                <Controller name="department"
                                control={control}
                                defaultValue={dataProfile.userData.department}
                                rules={{ required: 'Seleccione un departamento' }}
                                render={({ field }) => (
                                    <select className={style.select} {...field} value= {field.value === "" ? (userDatos.departament):(field
                                    .value)} onChange={(e) => {field.onChange(e); trigger("deparment"); handleDepartamentoChange(e) }}>
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
                                defaultValue={userDatos.city || dataProfile.userData.city}
                                rules={{ required: 'Seleccione una ciudad/municipio' }}
                                render={({ field }) => (
                                    <select className={style.select} {...field} value={field.value} onChange={(e) => {field.onChange(e); trigger("city"); }}>
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
                                defaultValue={userDatos.address || dataProfile.userData.address}
                                rules={{ required: 'Este campo es obligatorio', maxLength: {value: 150,message: 'La dirección no puede tener más de 150 caracteres'}, minLength: {value: 10,message: 'La dirección no puede tener menos de 10 caracteres'}} }
                                render={({ field }) => (
                                <textarea className={style.input} type="text" {...field} value={field.value} onChange={(e) => {field.onChange(e); trigger("address"); }}/>)}/>
                                <div className={style.errorMenssage}>
                                    {errors.address && <p className={style.simbolo}>¡</p>}
                                    {errors.address && <p className={style.errorText}>{errors.address.message}</p>}
                                    {errors.address && <p className={style.simbolo}>!</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={style.formbutton} disabled={formDisabled} >Actualizar datos </button>
                </form>
                <div className= {style.mensaje}>
                    {userModify === true ? (<><p className={style.positivo}> Información actualizada con éxito </p></>):(userMod === false ? (<><p className={style.negativo} >No se pudo actualizar, vuelve a intentarlo</p></>):(null))}
                </div>
            </div>
        </div>
    )
}
export default Datos