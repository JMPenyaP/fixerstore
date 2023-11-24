import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, Link } from "react-router-dom";
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./loginUser.module.css";
import imagenIzq from "../../assets/Fondolaterallogin.png";
import { createUser } from "../../redux/Actions/createUser";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { setDataProfile } from "../../redux/Actions/setDataProfile";

const LoginUser = () => {
    const [existe, setExiste] = useState(null);
    const [emailInput, setEmailInput] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [clientPass, setClientPass] = useState(null)
    const navigate = useNavigate()
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    //===========
    const googleId = "101830291208-95166t4ro97irr06jm9ah5rhud9iqbvu.apps.googleusercontent.com"
    //=========
    const dispatch = useDispatch()
    let user = useSelector((state) => state.clientProfile)
    useEffect(() => {
        setClientPass(user)
        return () => {
            setClientPass(null)
        }
    }, [user])
    const handleChange = (e) => {
        setEmailInput(e.target.value);
        setExiste(null)
        setClientPass(null)
    }
    const handleChangePass = (e) => {
        setPassword(e.target.value);
    }
    const userClient = async (email, event) => {
        event.preventDefault();
        try {
            const URL = "http://localhost:3001/users/email";
            const query = `?email=${email}`;
            const endpoint = URL + query;
            const res = await axios.get(endpoint);
            const { success } = res.data;
            setExiste(success);
        } catch (error) {
            return error.message;
        }
    }
    const loginAdmin = (emails, passwords, event) => {
        event.preventDefault()
        const data = { email: emails, password: passwords }
        dispatch(actions.loginU(data))
    }
    const handleRedirect = () => {
        if (clientPass) {
            navigate("/")
        }
    };

    const onSuccessLogin = async (decoded) => {
        try {
            const userData = {
                name: decoded.given_name,
                surname: decoded.family_name,
                password: decoded.sub,
                email: decoded.email,
                role: "client",
            };
            const URL = "http://localhost:3001/users/email";
            const query = `?email=${userData.email}`;
            const endpoint = URL + query;
            const res = await axios.get(endpoint);
            const { success } = res.data;
            if (success === true) {
                dispatch(actions.loginU({ email: userData.email, password: userData.password }))
            }
            else if (success === false) {
                dispatch(createUser(userData))
                setTimeout(() => { dispatch(actions.loginU({ email: userData.email, password: userData.password })) }, 1000)
            }
        } catch (error) {
            return error.message;
        }
    }

    return (
        <div className={style.contenedorMayor}>
            <div className={style.contenedor} >
                <img className={style.logo} src="https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694710937/FIXERSHOES/LOGO-FIXER-SOLO-PNG_mwfsfe.png" alt="Logo" />
                <h1 className={style.titulo}>Iniciar sesión</h1>
                <form>
                    <div className={style.form}>
                        <input type="text" name="email" onChange={(e) => handleChange(e)} placeholder="Correo electronico"/>
                        {existe !== true ? (<button className={style.formbutton} onClick={(event) => userClient(emailInput, event)}>Siguiente</button>) : (null)}
                        {existe === true ? (
                            <div className={style.passwordcontainer}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); handleChangePass(e) }}
                                />
                                <span className={style.passwordtoggle} onClick={togglePasswordVisibility}>
                                    {showPassword ? (<><img className={style.img} src="https://api.iconify.design/material-symbols:visibility-off-outline.svg?color=%233cbbed" alt="eyeopne" /></>) : (<><img className={style.img} src="https://api.iconify.design/material-symbols:visibility-outline.svg?color=%233cbbed" alt="eyeopne" /></>)}
                                </span>
                            </div>
                        ) : null}
                        {existe === true ? (<NavLink to="/dashboard"> <button className={style.formbutton} onClick={(event) => loginAdmin(emailInput, password, event)}>Iniciar sesión</button></NavLink>
                        ) : (null)}
                        <GoogleOAuthProvider clientId={googleId}>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    var decoded = jwt_decode(credentialResponse.credential)
                                    onSuccessLogin(decoded);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </GoogleOAuthProvider>
                        <div className={style.divOpciones}>
                        <Link to='/reset' className={style.olvido}><span>¿Olvidó su contraseña?</span></Link>
                        <p>Si no tiene una cuenta, <Link to='/registro' className={style.olvido}><span>Registrese aquí</span></Link></p>
                        </div>
                        {handleRedirect()}
                        {clientPass === false ? (
                            <div className={style.divmensajePass}>
                                <span className={style.span}> &#9888; Contraseña incorrecta </span>
                            </div>) : (null)}
                        {existe === false ? (<div className={style.divmensaje}>
                            <span className={style.span}> &#9888; Correo no registrado. <Link to='/registro'> <u>Registrese aquí</u></Link> para iniciar sesión.</span>
                            <Link to="/"><button className={style.x}>&#9932;</button></Link>
                        </div>
                        ) : (null)}
                        <NavLink to="/"><button className={style.formbuttonBack}>Volver</button></NavLink>
                    </div>
                </form>
            </div>
            <div className={style.divImagen}>
                <img className={style.imgder} src={imagenIzq} alt="" />
            </div>
        </div>
    )
};
export default LoginUser;