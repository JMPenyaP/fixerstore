import style from "./productos.module.css"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import EditProduct from "./EditProduct"
import { getAllProducts } from "../../../redux/Actions/getAllProducts"
import LogicDelete from "./LogicDelete"



const Productos = () => {
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => (state.allProducts ?? null ))
    allProducts.sort((a, b) => a.id - b.id);
    const [isModify, setIsModify] = useState(false)
    const [modifyProduct, setModifyProduct] = useState({})
    const [showEdit, setShowEdit] = useState(false)
    const handleShowEdit = () => {
      if(showEdit) {
        setShowEdit(false)
      }
      else {
        setShowEdit(true)
      }
    }
    const handleDetail = (id) => {
    const product= allProducts.filter((product) => product.id === id)
      setModifyProduct(product[0])
      if (isModify) {
        setIsModify(false)
        setModifyProduct({})
      }
      else {
        setIsModify(true)
        setModifyProduct(product[0])
      }
    }
    useEffect(()=> {
      if( allProducts.length === 0) {
        dispatch(getAllProducts())
      }
    }, [allProducts])

    //Condicionales para eliminar
    const [deleteProduct, setDeleteProduct] = useState(false)
    const [idDelete, setIdDelete] = useState("")
    const handleDelete = (id) => {
      if(deleteProduct) {
        setDeleteProduct(false)
        setIdDelete("")
      }
      else {
        setDeleteProduct(true)
        setIdDelete(id)
      }
    }



    return (
        <div className={style.contenedor}>
            <div className={style.divComplementario}>
              <h5 className={style.tituloProduct}>Mis productos </h5>
              {isModify ? (<button onClick= {()=> {handleDetail();setShowEdit(false)}}> &#8678;</button>):(null)}
            </div>
            {isModify === false ? 
            (<div className={style.divTabla}>
              <table className={style.table}>
                  <tr className={style.tr}> 
                      <th className={style.th}>ID de producto </th>
                      <th className={style.th}>Nombre</th>
                      <th className={style.th}>Estado</th>
                      <th className={style.th}>Precio</th>
                      <th className={style.th}>Oferta</th>
                      <th className={style.th}>Stock</th>
                      <th className={style.th}>Acciones</th>
                  </tr>
                  {allProducts.map((product) => (<>
                  <tr className={style.tr} key={product.id}>
                    <td className={style.td}># {product.id}</td>
                    <td className={style.td}>{product.name}</td>
                    <td className={style.td}>{product.status ? "Disponible" : "No disponible"}</td>
                    <td className={style.td}>${product.priceOfList}</td>
                    <td className={style.td}>{product.statusOffer ? `En oferta: ${product.offer} %` : "Sin oferta"}</td>
                    <td className={style.td}>{product.stock}</td>
                    <td className={style.tdetail}>
                        <button className= {style.botonEdit} disabled={deleteProduct} onClick= {() => handleDetail (product.id)}>Detalle</button>
                        <button className={style.botonDelete} disabled={deleteProduct} onClick={()=> handleDelete(product.id)}>Eliminar</button>
                    </td>
                  </tr>
                  {deleteProduct === true && idDelete === product.id && (
                  <td colSpan="7">
                    <div className={style.mensajeDelete}>
                      <p className={style.mensajeConfirmacion}>¿Desea eliminar el producto  <strong>{product.name}</strong>? Esta acción es permanente</p>
                      <button className={style.botonDeleteConfirm}>Eliminar</button>
                      <button className={style.botonCancelConfirm} onClick={() => handleDelete(product.id)}>Cancelar</button>
                      </div>
                  </td>)}</>
                  ))}
              </table>
              </div>): (<div>
                <div className={style.divModify}>
                <LogicDelete product={modifyProduct}/>
                {showEdit === false ? (<button onClick={handleShowEdit} className={style.editBoton}>Editar producto</button>) : (<button onClick={handleShowEdit} className={style.closeEditBoton}>Cerrar editor</button>) }
                {showEdit === true ? (<EditProduct product={modifyProduct} />): (null)}
                </div>              
              </div>

              )}
        </div>
    )}

export default Productos