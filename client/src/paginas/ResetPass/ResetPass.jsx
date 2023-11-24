import { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import style from "./resetPass.module.css"
import { useNavigate, useParams} from "react-router-dom"
import axios from "axios"


const ResetPass = () => {
    const {token} = useParams()
    console.log(token);
    const {handleSubmit, control, formState: {errors}, trigger, reset, watch} = useForm()
    const [mensaje, setMensaje] = useState("")
    const [formDisabled, setFormDisabled] = useState(false);
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    const [erroresPass, setErroresPass] = useState([])
    const [isRepeatPasswordEnabled, setIsRepeatPasswordEnabled] = useState(false);
    const [validate,setValidate] = useState(false)
    const password = watch("newPassword");
    const passwordMatchRule = (value) => value === password || "Las contraseñas no coinciden"
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
        if(errors.password || password === "") setIsRepeatPasswordEnabled(false);
        if(!errors.password && password !== "") setIsRepeatPasswordEnabled(true);
      }, [password, errors.password]);
    const onSubmit = async (data) => {
        delete data.repeatPassword;

        try {
            const response = await axios.post(`http://localhost:3001/passuser/reset/${token}`, data)
            const {message, success} = response.data
            setMensaje(message)
            setFormDisabled(true)
            console.log(response);
            console.log(message);
            if(success === true) {
                setTimeout(()=> {
                    reset()
                    navigate("/login")
                    setFormDisabled(false)}, 2000)
            }
        } 
        catch (error) {    
        }
    }
    console.log(mensaje);
    return (
        <div>
            <div className={style.div}>                
                <img className={style.logo} src="https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694710937/FIXERSHOES/LOGO-FIXER-SOLO-PNG_mwfsfe.png" alt="Logo" />
                <h2 className={style.titulo1} htmlFor="email"> Restablece tu contraseña </h2>
                <h3 className={style.titulo2} htmlFor="email"> Ingresa tu contraseña nueva </h3>
                <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                    <div className={style.divCampo}>
                        <label className={style.label} htmlFor="newPassword"> Nueva contraseña </label>
                        <div className={style.divInput}>
                            <div className={style.contraseña}>
                                <Controller name="newPassword"
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
                            <label className={style.label} htmlFor="repeatPassword"> Repetir nueva contraseña </label>
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
                        </div>
                <button type="submit" className={style.formbutton} disabled={formDisabled} > Crear nueva contraseña </button>
                </form>
                <div className= {style.mensaje}>
                    {mensaje && <p className={style.positivo}>{mensaje}</p>}
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default ResetPass