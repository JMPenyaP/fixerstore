import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate, Link } from "react-router-dom";
import * as actions from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import style from "./loginUser.module.css"
import imagenIzq from "../../assets/Fondolaterallogin.png"
import {gapi} from "gapi-script"
import GoogleLogin from "react-google-login"
import { createUser } from "../../redux/Actions/createUser";

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
    const dispatch = useDispatch()
    let user = useSelector((state) => state.clientProfile)
    useEffect(() => {
        setClientPass(user)
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
    console.log(existe);
    // Renderizado
    const clientId="857226330997-djo84o8lcmedrffj6d4bm0pt8oks23bn.apps.googleusercontent.com"
    useEffect(()=>{
     const start= ()=>{
        gapi.auth2.init({
            clientId:clientId
        })
    }
     gapi.load("client:auth2",start)
    },[])
    const onSuccess= async (response)=>{
        try {
            const { profileObj, tokenId} = response;
            const { givenName, familyName, email } = profileObj;
            console.log(response);
            const userData = {
                name: givenName,
                surname: familyName,
                password: tokenId,
                email: email,
                role: "client",
              };
            const URL = "http://localhost:3001/users/email";
            const query = `?email=${userData.email}`;
            const endpoint = URL + query;
            const res = await axios.get(endpoint);
                const { success } = res.data;
                if (success === true) {
                    dispatch(actions.loginU({email: userData.email, password: userData.password}))
                }
                else if (success === false) {
                    dispatch(createUser(userData))
                    setTimeout(()=> {dispatch(actions.loginU({email: userData.email, password: userData.password}))}, 1000)
                }
        } catch (error) {
            return error.message;
        }
    }
      const onFailure=()=>{
        console.log("somethimg went wrong")
    }
    return (
        <div className={style.contenedorMayor}>
            <div className={style.contenedor} >
                <img className={style.logo} src="https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694710937/FIXERSHOES/LOGO-FIXER-SOLO-PNG_mwfsfe.png" alt="Logo" />
                <h1 className={style.titulo}>Inicia Sesión</h1>
                <form>
                    <div className={style.form}>
                    <input type="text" name="email" onChange={(e) => handleChange(e)} placeholder="Correo electronico" />
                    {existe !== true ? (<button className={style.formbutton} onClick={(event) => userClient(emailInput, event)}>Siguiente</button>) : (null)}
                    {existe === true ? (
                        <div className={style.passwordcontainer}>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          placeholder="Contraseña"
                          value={password}
                          onChange={(e) => {setPassword(e.target.value); handleChangePass(e)}}
                          />
                        <span className={style.passwordtoggle} onClick={togglePasswordVisibility}>
                          {showPassword ? (<><img className={style.img} src="https://api.iconify.design/material-symbols:visibility-off-outline.svg?color=%233cbbed" alt="eyeopne" /></>) : (<><img className={style.img} src="https://api.iconify.design/material-symbols:visibility-outline.svg?color=%233cbbed" alt="eyeopne" /></>)}
                        </span>
                      </div>
                    ) : null}
                    {existe === true ? (<NavLink to="/dashboard"> <button className={style.formbutton} onClick={(event) => loginAdmin(emailInput, password, event)}>Iniciar sesión</button></NavLink>
                    ) : (null)}
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Inicia sesión o continuar con Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_policy"}
                        className={style.miClaseDeEstilo}/>
                       {/*  <a href="#" onClick={()=> handleGoogleLoginClick()}>
                        Iniciar sesión con Google
                        </a> */}
                    <Link to='/' className={style.olvido}><span>¿Olvidó su contraseña?</span></Link>
                    <Link to='/registro' className={style.olvido}><span>Registrarse</span></Link>
                    {handleRedirect ()}
                    {clientPass === false ? (
                    <div className={style.divmensajePass}>
                    <span className={style.span}> &#9888; Contraseña incorrecta </span>
                    </div>): (null)}
                    {existe === false ? (<div className={style.divmensaje}>
                        <span className={style.span}> &#9888; Correo no registrado. <Link to='/registro'> <u>Registrese aquí</u></Link> para iniciar sesión.</span>           
                        <Link to="/"><button className={style.x}>&#9932;</button></Link>                       
                        </div>
                    ): (null)}
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


/*         axios.post("http://localhost:3001/users/register",{
  
        name:response.profileObj.givenName,
        surname:response.profileObj.familyName,
        password:response.googleId,
        email:response.profileObj.email,
        role:"client"
  
      })
        console.log(response) */

    /* const handleGoogleLoginClick = () => {
        setGoogle(true)
        setTimeout(() => {
            console.log("Estado de google:", google); // Imprime el valor de google en la consola
          }, 0);
    } */
    