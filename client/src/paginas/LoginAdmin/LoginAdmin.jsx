import { useState } from "react";
import axios from "axios";


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
                    <input type="text" name="email" value={email}/>
                    <button onClick={()=> userAdmin(email)}>Siguiente</button>

                </form>
            </div>
            <div>

            </div>
        </div>
    )
};
export default LoginAdmin;
