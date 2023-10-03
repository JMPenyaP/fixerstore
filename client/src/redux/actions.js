// importacion de actions desde carpeta actions y se exportan para uso en los componentes.import { create } from "./Actions/createdDog";

//EJEMPLO
/* import { search } from "./Actions/searchDog";
import { apiDogs } from "./Actions/setApiDogs";
import { dbDogs } from "./Actions/setDBDogs";
import { intermedia } from "./Actions/setIntermedia";
import { temperamentos } from "./Actions/setTemperamentos";
import { clearF, filterOri, filterTem, ordenN, ordenP } from "./Actions/variasActions";
 
//Importo acciones y las exporto para acceder como * acciones
export const setTemperamentos = temperamentos // Trae los temperamentos de la DB (esta tiene los de la API)
export const setIntermedia = intermedia //Trae la tabla intermedia
export const setApiDogs = apiDogs // Trae los perros de la API
export const setDBDogs = dbDogs // Trae los perros de la DB
export const filterOrigen = filterOri // Filtra por origen
export const filterTemp = filterTem // Filtra por temperamento
export const ordenName = ordenN // Ordena por nombre
export const ordenPeso = ordenP // Ordena por peso
export const clearFilter = clearF // Limpia el filtro
export const createDog = create // Crea un nuevo perro
export const searchDog = search // Busca perro(s)
*/

import { createProduct } from "./Actions/createProduct";
import { getProductByName } from "./Actions/getProductByName";
import { setFilter } from "./Actions/setearFilter";
import { loginAdmin } from "./Actions/loginAdmin";
import { loginUser } from './Actions/loginUser'
import { modifyData } from './Actions/modifyData'
import { userFavoritos } from './Actions/userFavoritos'
import { crearFavoritos } from './Actions/crearFavoritos'
import { borrarFavoritos } from './Actions/borrarFavoritos'
//
import { userHistorial } from './Actions/userHistorial'
import { setNameSearch } from './Actions/setNameSearch' 
import { buscaComb } from './Actions/buscaComb'
import { setCategoryId } from './Actions/setCategoryId'
import { setOrder } from './Actions/setOrder'
import { setOrder2 } from "./Actions/setOrder2";
import { showFilters } from './Actions/showFilters'
import { setBuscaComb } from './Actions/setBuscaComb'
import { sendReview } from './Actions/sendReview'
import { getReviews } from './Actions/getReviews'


export const createProd = createProduct;
export const getProductName = getProductByName;
export const setFilters = setFilter;
export const login = loginAdmin;
export const loginU = loginUser;
export const modify = modifyData;
export const favoritos = userFavoritos;
export const creaFav = crearFavoritos;
export const borraFav = borrarFavoritos;
//
export const historial = userHistorial;
export const setNameS = setNameSearch;
export const busq = buscaComb;
export const setbusq = setBuscaComb;
export const setCat = setCategoryId
export const setOr = setOrder;
export const setOr2 = setOrder2;
export const show = showFilters;
export const sendRev = sendReview;
//
export const review = getReviews;
