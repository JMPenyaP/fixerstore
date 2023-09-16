import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import * as actions from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const LoginAdmin = () => {
    const [existe, setExiste] = useState(null);
    const [emailInput, setEmailInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [adminPass, setAdminPass] = useState(null)
    const dispatch = useDispatch()
    const admin = useSelector((state) => state.adminProfile)
    useEffect(() => {
        setAdminPass(admin)
    }, [admin])
    const handleChange = (e) => {
        setEmailInput(e.target.value);
    }
    const handleChangePass = (e) => {
        setPassInput(e.target.value);
    }
    const userAdmin = async (email, event) => {
        event.preventDefault();
        try {
            const URL = "http://localhost:3001/users/email";
            const query = `?email=${email}`;
            const endpoint = URL + query;
            const res = await axios.get(endpoint);
            if (res.status === 200) {
                const { success, role } = res.data;
                if (success === true) {
                    if (role === "admin") {
                        setExiste(success);
                    }
                    else {
                        setExiste(false);
                    }
                }
                if (success === false) {
                    setExiste(false)
                }
            }
        } catch (error) {
            return error.message;
        }
    }
    const loginAdmin = (emails, passwords, event) => {
        event.preventDefault()
        const data = { email: emails, password: passwords }
        dispatch(actions.login(data))

    }
    const handleRedirect = () => {
        if (adminPass) {
            window.location.href = "/dashboard";
        }
    }
    console.log(existe);
    // Renderizado
    return (
        <div>
            <div>
                <img src="" alt="" />
                <form>
                    <input type="text" name="email" onChange={handleChange} />
                    {existe !== true ? (<button onClick={(event) => userAdmin(emailInput, event)}>Siguiente</button>) : (null)}
                    {existe === false ? (
                        <div>
                            <span>Este usuario no es administrador</span>
                            <NavLink to="/"> {/* Reemplaza "ruta-de-redireccion" con la ruta adecuada */}
                                <button>X</button>
                            </NavLink>
                        </div>
                    ) : existe === true ? (
                        <input type="text" name="password" onChange={handleChangePass} />
                    ) : null}
                    {existe === true ? (<NavLink to="/dashboard"> <button onClick={(event) => loginAdmin(emailInput, passInput, event)}>Inciar sesión</button></NavLink>
                    ) : (null)}
                    {handleRedirect()}
                </form>
            </div>
            <div>
            </div>
        </div>
    )
};
export default LoginAdmin;