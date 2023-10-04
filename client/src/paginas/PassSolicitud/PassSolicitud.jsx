import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import style from "./passSolicitud.module.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"


const PassSolicitud = () => {
    const { handleSubmit, control, formState: { errors }, trigger, reset, watch } = useForm()
    const [mensaje, setMensaje] = useState("")
    const [formDisabled, setFormDisabled] = useState(false);
    const navigate = useNavigate()
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
                } else return false
            }

        } catch (error) {
            return error.message;
        }
    }
    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`http://localhost:3001/passuser/request-reset`, { email: data.email })
            const { message, success } = response.data
            setMensaje(message)
            setFormDisabled(true)
            if (success === true) {
                setTimeout(() => {
                    reset()
                    navigate("/login")
                    setFormDisabled(false)
                }, 2000)
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    return (
        <div>
            <div className={style.div}>
                <img className={style.logo} src="https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694710937/FIXERSHOES/LOGO-FIXER-SOLO-PNG_mwfsfe.png" alt="Logo" />
                <h2 className={style.titulo1} htmlFor="email"> ¿Olvidaste tu contraseña? </h2>
                <h3 className={style.titulo2} htmlFor="email"> Recupera tu contraseña por medio de tu correo electronico </h3>
                <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                    <div className={style.divCampo}>
                        <label className={style.label} htmlFor="email"> Ingresa el correo electronico asociado a tu cuenta </label>
                        <div className={style.divInput}>
                            <Controller name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Este campo es obligatorio',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Este no es un correo electrónico válido',
                                    },
                                    validate: async (value) => {
                                        if (value) {
                                            const existe = await verifyEmail(value);
                                            if (!existe) {
                                                return 'Este correo electrónico no está registrado';
                                            }
                                        }
                                        return true;
                                    },
                                }}
                                render={({ field }) => (
                                    <input className={style.input} type="text" placeholder="Tu correo" {...field} onChange={(e) => { field.onChange(e); trigger("email"); }} />)} />
                            <div className={style.errorMenssage}>
                                {errors.email && <p className={style.simbolo}>¡</p>}
                                {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
                                {errors.email && <p className={style.simbolo}>!</p>}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={style.formbutton} disabled={formDisabled} > Enviar link de recuperación </button>
                </form>
                <div className={style.mensaje}>
                    {mensaje && <p className={style.positivo}>{mensaje}</p>}
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default PassSolicitud