import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import * as actions from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./loginAdmin.module.css";
import imagenIzq from "../../assets/Fondolaterallogin.png";

const LoginAdmin = () => {
  const [existe, setExiste] = useState(null);
  const [emailInput, setEmailInput] = useState("");
  const [adminPass, setAdminPass] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.adminProfile);
  useEffect(() => {
    setAdminPass(admin);
  }, [admin]);
  const handleChange = (e) => {
    setEmailInput(e.target.value);
    setExiste(null);
    setAdminPass(null);
  };
  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };
  const userAdmin = async (email, event) => {
    event.preventDefault();
    try {
      const URL = "http://localhost:3001/users/email";
      const query = `?email=${email}`;
      const endpoint = URL + query;
      const res = await axios.get(endpoint);
      const { success, userdata } = res.data;
      if (success === true) {
        if (userdata.role === "admin") {
          setExiste(true);
        } else {
          setExiste(false);
        }
      }
      if (success === false) {
        setExiste(false);
      }
    } catch (error) {
      return error.message;
    }
  };
  const loginAdmin = (emails, passwords, event) => {
    event.preventDefault();
    const data = { email: emails, password: passwords };
    dispatch(actions.login(data));
  };
  const handleRedirect = () => {
    if (adminPass) {
      navigate("/dashboard");
    }
  };
  // Renderizado
  return (
    <div className={style.contenedorMayor}>
      <div className={style.contenedor}>
        <img
          className={style.logo}
          src="https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694710937/FIXERSHOES/LOGO-FIXER-SOLO-PNG_mwfsfe.png"
          alt="Logo"
        />
        <h1 className={style.titulo}>Inicia sesión como administrador</h1>
        <form>
          <div className={style.form}>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Correo electronico"
            />
            {existe !== true ? (
              <button
                className={style.formbutton}
                onClick={(event) => userAdmin(emailInput, event)}
              >
                Siguiente
              </button>
            ) : null}
            {existe === true ? (
              <div className={style.passwordcontainer}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleChangePass(e);
                  }}
                />
                <span
                  className={style.passwordtoggle}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <>
                      <img
                        className={style.img}
                        src="https://api.iconify.design/material-symbols:visibility-off-outline.svg?color=%233cbbed"
                        alt="eyeopne"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        className={style.img}
                        src="https://api.iconify.design/material-symbols:visibility-outline.svg?color=%233cbbed"
                        alt="eyeopne"
                      />
                    </>
                  )}
                </span>
              </div>
            ) : null}
            {existe === true ? (
              <NavLink to="/dashboard">
                {" "}
                <button
                  className={style.formbutton}
                  onClick={(event) => loginAdmin(emailInput, password, event)}
                >
                  Inciar sesión
                </button>
              </NavLink>
            ) : null}
            {handleRedirect()}
            {adminPass === false ? (
              <div className={style.divmensajePass}>
                <span className={style.span}>
                  {" "}
                  &#9888; Correo electronico y contraseña incorrectas{" "}
                </span>
              </div>
            ) : null}
            {existe === false ? (
              <div className={style.divmensaje}>
                <span className={style.span}>
                  {" "}
                  &#9888; Este usuario no es administrador
                </span>
                <NavLink to="/">
                  {" "}
                  {/* Reemplaza "ruta-de-redireccion" con la ruta adecuada */}
                  <button className={style.x}>&#9932;</button>
                </NavLink>
              </div>
            ) : null}
          </div>
        </form>
      </div>
      <div className={style.divImagen}>
        <img className={style.imgder} src={imagenIzq} alt="" />
      </div>
    </div>
  );
};
export default LoginAdmin;
