import { useState } from "react";
import { NavLink } from "react-router-dom"

const LoginAdmin = () => {
    const [existe, setExiste] = useState(null)
    const userAdmin = (userData) => {
        try {
            const {email} = userData;
            const URL = "";
            const query =  `?email=${email}`;
            const endpoint = URL + query;
            return async () => {
                const {data} = await axios.get(endpoint);
                const {existe} = data;
                setExiste(existe)
            }
        }
        catch (error) {
            const errorResponse = {}
            errorResponse.error = error.message
            return errorResponse
        }
    }
    // Renderizado
    return (
        <div>
            <div>
                <img src="" alt=""/>
                <form onSubmit={handleSummit}>
                    <input type="text" name="email"/>
                    <button onClick={()=> userAdmin(email)}>Siguiente</button>
                    {existe === true ? (<div>
                    <span>Este usuario no es administrador</span>
                    <NavLink>
                        <button>X</button>
                    </NavLink>
                    </div>) 
                    :existe === false ? ( <input type="text" name="password"/>):null}
                    {}
                </form>
            </div>
            <div>

            </div>
        </div>
    )
};
export default LoginAdmin
