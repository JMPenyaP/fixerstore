import style from "./productos.module.css"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import EditProduct from "./EditProduct"
import { getAllProducts } from "../../../redux/Actions/getAllProducts"
import LogicDelete from "./LogicDelete"
import axios from "axios"



const Productos = () => {
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => (state.allProducts ?? null ))
    allProducts.sort((a, b) => a.id - b.id);
    const [isModify, setIsModify] = useState(false)
    const [modifyProduct, setModifyProduct] = useState({})
    const [showEdit, setShowEdit] = useState(false)
    const [mensaje, setMensaje] = useState("")
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
    const handlePermanentDelete = async (id) => {
      try {
        const endpoint = `http://localhost:3001/products/destroy/${id}`
        const response = await axios.delete(endpoint)
        console.log(response);
        const {data} = response
        const {message} = data
        if(message) {
            setMensaje("Producto eliminado con éxito")
        }
      } 
      catch (error) {
        setMensaje("Hubo un error, intentalo de nuevo") 
      }
      setTimeout(()=> {
        window.location.reload()
      }, 800)
    }
    return (
        <div className={style.contenedor}>
            <div className={style.divComplementario}>
              <h5 className={style.tituloProduct}>Mis productos </h5>
              {isModify ? (<button className={style.backBoton} onClick= {()=> {handleDetail();setShowEdit(false)}}> &#8678;</button>):(null)}
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
                      <button className={style.botonDeleteConfirm} onClick={()=> handlePermanentDelete(product.id)}>Eliminar</button>
                      <button className={style.botonCancelConfirm} onClick={() => handleDelete(product.id)}>Cancelar</button>
                    </div>
                    <div className={style.mensajeDelete}>
                    {mensaje !== "" ? (<><p className={style.mensajeCreated}>{mensaje}</p></>):(null)}
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



// {
//   "order": {
//     "id": 1,
//     "status": "pending",
//     "totalAmount": "725.00",
//     "UserId": "5f341d06-f7bc-4eaa-837c-efe7c2f67f27",
//     "name": "Ansony",
//     "surname": "Rojas",
//     "phone": "04128093829",
//     "cc": "20644880",
//     "payment": "Banesco",
//     "retiro": "local centro de bogota",
//     "city": "",
//     "address": "",
//     "department": "",
//     "createdAt": "2023-09-28T22:55:37.328Z",
//     "updatedAt": "2023-09-28T22:55:37.380Z",
//     "Products": [
//       {
//         "id": 2,
//         "name": "Cordones Reflectivos",
//         "categoryId": 2,
//         "firstImage": "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1695330026/FIXERSHOES/lkszx33ausu5eze0fmyv.png",
//         "carrouselImage": [
//           "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1695330026/FIXERSHOES/mowtprncpvxnn7nck11q.png"
//         ],
//         "description": "cordones reflectivos, decoran muy bonito el calzado, tiene muy buena resitencia y reflejan en la oscuridad, se utilizan en las botas y los tenis.",
//         "date": "01-18-2023",
//         "priceOfList": "15.000",
//         "statusOffer": true,
//         "offer": 25,
//         "stock": 15,
//         "status": true,
//         "OrderItems": {
//           "OrderId": 1,
//           "ProductId": 2,
//           "quantity": 30,
//           "price": "15.00",
//           "createdAt": "2023-09-28T22:55:37.348Z",
//           "updatedAt": "2023-09-28T22:55:37.348Z",
//           "orderedProductoId": null
//         },
//         "Category": {
//           "id": 2,
//           "name": "cordones"
//         }
//       },
//       {
//         "id": 6,
//         "name": "Cepillo Para Gamuza",
//         "categoryId": 6,
//         "firstImage": "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705741/FIXERSHOES/image00124_m6fkwr.png",
//         "carrouselImage": [
//           "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705743/FIXERSHOES/image00132_evlhxv.png"
//         ],
//         "description": "es un cepillo de limpieza profesional para la gamuza, tiene un lado de cerdas de alambre que nos ayuda a peinar y emparejar la gamuza, tambien ayuda al proceso de la tintura para que el material abra el poro y penetre mejor el quimico, al costado tiene unos dientes de goma que ayuda a limpiar el mugre o polvo por los orificios de tu calzado entre la capella y suela, y al respaldo hay cerdas de goma que te ayudan a limpiar las motas y suciedad que este almacene.",
//         "date": "01-18-2023",
//         "priceOfList": "25.000",
//         "statusOffer": true,
//         "offer": 10,
//         "stock": 15,
//         "status": true,
//         "OrderItems": {
//           "OrderId": 1,
//           "ProductId": 6,
//           "quantity": 3,
//           "price": "25.00",
//           "createdAt": "2023-09-28T22:55:37.364Z",
//           "updatedAt": "2023-09-28T22:55:37.364Z",
//           "orderedProductoId": null
//         },
//         "Category": {
//           "id": 6,
//           "name": "cepillos"
//         }
//       },
//       {
//         "id": 7,
//         "name": "Limpiador Express",
//         "categoryId": 7,
//         "firstImage": "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705736/FIXERSHOES/image00115_wwra1a.png",
//         "carrouselImage": [
//           "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705743/FIXERSHOES/image00129_zgitym.png"
//         ],
//         "description": "este en un quimico que viene en su presentacion de spray o atomizador, ayuda a renovar el tono del calzado solo en caso de que este se encuentre un poco deteriorado, por lo que es neutro no da tonalidad, no tapa rapones grandes, no empareja un zapato descolorido, es recomendable utilizarlo en nobuck, gamuza , carnza y textil.",
//         "date": "01-18-2023",
//         "priceOfList": "20.000",
//         "statusOffer": true,
//         "offer": 10,
//         "stock": 15,
//         "status": true,
//         "OrderItems": {
//           "OrderId": 1,
//           "ProductId": 7,
//           "quantity": 10,
//           "price": "20.00",
//           "createdAt": "2023-09-28T22:55:37.374Z",
//           "updatedAt": "2023-09-28T22:55:37.374Z",
//           "orderedProductoId": null
//         },
//         "Category": {
//           "id": 7,
//           "name": "productos para limpieza"
//         }
//       }
//     ]
//   }
// }