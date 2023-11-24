import axios from "axios"
import { useEffect, useState } from "react"
import style from "./logicdelete.module.css"
import { useDispatch } from "react-redux"
import { getAllProducts } from "../../../redux/Actions/getAllProducts"


const LogicDelete = (props) => {
    const dispatch = useDispatch()
    const {product, onModify} = props
    const [change, setChange] = useState(false)
    const [statusSend, setStatusSend] = useState(null)
    const [valueSelect, setValueSelect] = useState(product.status)
    const [mensaje,setMensaje] = useState("")
    const handleChange = (e) => {
        const value = e.target.value
        setValueSelect(value)
    }
    const dispatchBorrado = async () => {
        if (valueSelect === "false") {
            try {
                const endpoint = `http://localhost:3001/products/soft-delete/${product.id}`
                const response = await axios.patch(endpoint)
                const {data} = response
                const {message} = data
                if(message !== "") {
                    setMensaje("Producto deshabilitado correctamente")
                }
                dispatch(getAllProducts())
                setTimeout(()=> {
                    onModify()
                  }, 1000)
            } 
            catch (error) {
                setMensaje("Hubo un error, intentalo de nuevo") 
            }
        }
        else if (valueSelect === "true") {
            try {
                const endpoint = `http://localhost:3001/products/soft-active/${product.id}`
                const response = await axios.patch(endpoint)
                const {data} = response
                const {message} = data
                if(message !== "") {
                    setMensaje("Producto habilitado correctamente")
                }
                dispatch(getAllProducts())
                setTimeout(()=> {
                    onModify()
                  }, 1000)
            } 
            catch (error) {
                setMensaje("Hubo un error, intentalo de nuevo") 
            }
        }
    }
    return (
    <div className={style.divContenedorHab}>
        <div className={style.divProductImage}>
            <img className={style.productImage}src={product.firstImage} alt={product.name} />
        </div>
        <div className={style.divContHabi}>
            <p className={style.titleProductEdit}>{product.name}</p>
            <p className={style.mensajeStock}>Stock actual: <strong>{product.stock}</strong> unidades</p>
            <p className={style.mensajeStock}>Actualmente este producto está: {product.status === true ? (<><strong>Habilitado</strong></>):(<><strong>Deshabilitado</strong></>)}  </p>
            <p className={style.mensajeHabilitarP}>Habilita o desahbilita este producto de tu catalogo </p>
            <select className={style.select} name="status" defaultValue={product.status} onChange={handleChange}>
                <option value="true">Habilitar</option>
                <option value="false">Deshabilitar</option>
            </select>
            <button onClick={dispatchBorrado} className={style.saveBoton}>Guardar</button>
            {mensaje !== "" ? (<><p className={style.mensajeCreated}>{mensaje}</p></>):(null)}
        </div>
    </div>
    )
}

export default LogicDelete