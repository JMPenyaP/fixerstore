import style from "./productos.module.css"
import { useState } from "react"
import { useSelector } from "react-redux"
import EditProduct from "./EditProduct"


const Productos = () => {
    const allProducts = useSelector((state) => (state.allProducts ?? null ))
    allProducts.sort((a, b) => a.id - b.id);
    const [isModify, setIsModify] = useState(false)
    const [modifyProduct, setModifyProduct] = useState({})
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
    return (
        <div className={style.contenedor}>
            <div className={style.divComplementario}>
                <h5 className={style.tituloProduct}>Mis productos </h5>
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
                  {allProducts.map((product) => (
                  <tr className={style.tr} key={product.id}>
                    <td className={style.td}># {product.id}</td>
                    <td className={style.td}>{product.name}</td>
                    <td className={style.td}>{product.status ? "Disponible" : "No disponible"}</td>
                    <td className={style.td}>${product.priceOfList*1000}</td>
                    <td className={style.td}>{product.statusOffer ? `En oferta: ${product.offer} %` : "Sin oferta"}</td>
                    <td className={style.td}>{product.stock}</td>
                    <td className={style.tdetail}>
                        <button className= {style.botonEdit}onClick= {() => handleDetail (product.id)}>Editar</button>
                        <button className={style.botonDelete}>Eliminar</button>
                    </td>
                    </tr>
                      ))}
              </table>
              </div>): (<div>              
                <button onClick= {handleDetail}> Back </button>
                <EditProduct product={modifyProduct} />
              </div>

              )}
        </div>
    )}

export default Productos