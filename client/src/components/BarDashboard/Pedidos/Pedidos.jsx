import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux"
import style from "./pedidos.module.css"
import { getAllOrders } from "../../../redux/Actions/getAllOrders";
import axios from "axios";


const Pedidos = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  const allOrders = useSelector((state) => (state.allOrders))
    const ordenes = [
      {
        "id": 101,
        "status": "delivered",
        "totalAmount": "725.00",
        "UserId": "5f341d06-f7bc-4eaa-837c-efe7c2f67f27",
        "name": "Ansony",
        "surname": "Rojas",
        "phone": "04128093829",
        "cc": "20644880",
        "payment": "Banesco",
        "retiro": "local centro de bogota",
        "city": "",
        "address": "",
        "department": "",
        "createdAt": "2023-09-28T22:55:37.328Z",
        "updatedAt": "2023-09-28T22:55:37.380Z",
        "Products": [
          {
            "id": 2,
            "name": "Cordones Reflectivos",
            "categoryId": 2,
            "firstImage": "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1695330026/FIXERSHOES/lkszx33ausu5eze0fmyv.png",
            "carrouselImage": [
              "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1695330026/FIXERSHOES/mowtprncpvxnn7nck11q.png"
            ],
            "description": "cordones reflectivos, decoran muy bonito el calzado, tiene muy buena resitencia y reflejan en la oscuridad, se utilizan en las botas y los tenis.",
            "date": "01-18-2023",
            "priceOfList": "15.000",
            "statusOffer": true,
            "offer": 25,
            "stock": 15,
            "status": true,
            "OrderItems": {
              "OrderId": 1,
              "ProductId": 2,
              "quantity": 30,
              "price": "15.00",
              "createdAt": "2023-09-28T22:55:37.348Z",
              "updatedAt": "2023-09-28T22:55:37.348Z",
            },
            "Category": {
              "id": 2,
              "name": "cordones"
            }
          },
          {
            "id": 6,
            "name": "Cepillo Para Gamuza",
            "categoryId": 6,
            "firstImage": "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705741/FIXERSHOES/image00124_m6fkwr.png",
            "carrouselImage": [
              "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705743/FIXERSHOES/image00132_evlhxv.png"
            ],
            "description": "es un cepillo de limpieza profesional para la gamuza, tiene un lado de cerdas de alambre que nos ayuda a peinar y emparejar la gamuza, tambien ayuda al proceso de la tintura para que el material abra el poro y penetre mejor el quimico, al costado tiene unos dientes de goma que ayuda a limpiar el mugre o polvo por los orificios de tu calzado entre la capella y suela, y al respaldo hay cerdas de goma que te ayudan a limpiar las motas y suciedad que este almacene.",
            "date": "01-18-2023",
            "priceOfList": "25.000",
            "statusOffer": true,
            "offer": 10,
            "stock": 15,
            "status": true,
            "OrderItems": {
              "OrderId": 1,
              "ProductId": 6,
              "quantity": 3,
              "price": "25.00",
              "createdAt": "2023-09-28T22:55:37.364Z",
              "updatedAt": "2023-09-28T22:55:37.364Z",
              "orderedProductoId": null
            },
            "Category": {
              "id": 6,
              "name": "cepillos"
            }
          },
          {
            "id": 7,
            "name": "Limpiador Express",
            "categoryId": 7,
            "firstImage": "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705736/FIXERSHOES/image00115_wwra1a.png",
            "carrouselImage": [
              "https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694705743/FIXERSHOES/image00129_zgitym.png"
            ],
            "description": "este en un quimico que viene en su presentacion de spray o atomizador, ayuda a renovar el tono del calzado solo en caso de que este se encuentre un poco deteriorado, por lo que es neutro no da tonalidad, no tapa rapones grandes, no empareja un zapato descolorido, es recomendable utilizarlo en nobuck, gamuza , carnza y textil.",
            "date": "01-18-2023",
            "priceOfList": "20.000",
            "statusOffer": true,
            "offer": 10,
            "stock": 15,
            "status": true,
            "OrderItems": {
              "OrderId": 1,
              "ProductId": 7,
              "quantity": 10,
              "price": "20.00",
              "createdAt": "2023-09-28T22:55:37.374Z",
              "updatedAt": "2023-09-28T22:55:37.374Z",
              "orderedProductoId": null
            },
            "Category": {
              "id": 7,
              "name": "productos para limpieza"
            }
          }
        ]
      },
        {
          id: 111,
          status: "in progress",
          totalAmount: 220000,
          userId: "hgfdsjkwqwe",
          name: "Maria",
          surname: "Gonzalez",
          phone: "3105557890",
          cc: "987654321",
          payment: "PayPal",
          retiro: "Tienda",
          city: "Bogotá",
          department: "Cundinamarca",
          address: "Calle 45 #18-30 Local 5",
          createdAt: "2023-09-27 15:17:26.026-05" 
        },
        {
          id: 121,
          status: "pending",
          totalAmount: 85000,
          userId: "asdfghjkl",
          name: "Carlos",
          surname: "Lopez",
          phone: "3207771234",
          cc: "369852147",
          payment: "Visa",
          retiro: "Domicilio",
          city: "Cali",
          department: "Valle del Cauca",
          address: "Avenida 3N #10-50 Apt 302",
          createdAt: "2023-09-27 15:17:26.026-05" 
        },
        {
          id: 131,
          status: "delivered",
          totalAmount: 75000,
          userId: "qwertyuiop",
          name: "Ana",
          surname: "Ramirez",
          phone: "3158885678",
          cc: "774412365",
          payment: "Efectivo",
          retiro: "Sucursal",
          city: "Barranquilla",
          department: "Atlántico",
          address: "Calle 22 #5-10 Local 8",
          createdAt: "2023-09-27 15:17:26.026-05" 
        },
        {
          id: 141,
          status: "delivered",
          totalAmount: 320000,
          userId: "zxcvbnmasd",
          name: "Luis",
          surname: "Martinez",
          phone: "3179991111",
          cc: "555566667",
          payment: "Transferencia Bancaria",
          retiro: "Oficina",
          city: "Cartagena",
          department: "Bolívar",
          address: "Carrera 10 #30-45 Piso 3",
          createdAt: "2023-09-27 15:17:26.026-05" 
        },
      ];
    const [orders, setOrders] = useState([])
    const [origen, setOrigen] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [idOrden, setIdOrden] = useState("")
    const [isDetail, setIsDetail] = useState(false)
    const [detailOrder, setDetailOrder] = useState({})
    const [statusModify, setStatusModify] = useState("")
    const [nextStatus, setNextStatus] = useState("")
    const [backStatus, setBackStatus] = useState("")
    useEffect(()=> {
      if(statusModify !== "") {
        if (statusModify === "Pendiente") {
          setNextStatus("Enviado")
          setBackStatus("")
        }
        if (statusModify === "Enviado") {
          setNextStatus("Entregado")
          setBackStatus("Pendiente")
        }
        if (statusModify === "Entregado") {
          setNextStatus("")
          setBackStatus("Enviado")
        }
      }
    }, [statusModify])
    useEffect(()=> {
      if (allOrders.length === 0) {
        setOrders(ordenes)}
        else if (allOrders.length > 0) {
          setOrders(allOrders)}
    }, [allOrders])

    const handleDetail = async (id) => {
      if (allOrders.length === 0) {
        const orden = orders.filter((or) => or.id === id)
        setDetailOrder(orden[0])
        if (isDetail) {
          setIsDetail(false)
          setDetailOrder({})
          setStatusModify("")
        }
        else {
          setIsDetail(true)
          setDetailOrder(orden[0])
          setStatusModify(orden[0].status)
          setIdOrden(orden[0].id)
        }
      }
      else if (allOrders.length > 0) {
        if (isDetail) {
          setIsDetail(false)
          setDetailOrder({})
          setStatusModify("")
          setOrigen("")
        }
        else {
          const endpoint = `http://localhost:3001/order/id/${id}`
          const response = await axios.get(endpoint)
          console.log(response);
          const orden = response.data
          const {order} = orden 
          setIsDetail(true)
          setDetailOrder(order)
          setStatusModify(order.status)
          setIdOrden(order.id)
          setOrigen("DB")
        }
      }
    }
    const updateState = async (e) => {
      const status = e.target.value
      const id = idOrden
      if (origen === "DB") {
        try {
          const endpoint = "http://localhost:3001/order/update"
          const body = {
            status: status,
            id: id
          }
          const response = await axios.patch(endpoint, body)
          const {data} = response
          setMensaje(data)
          dispatch(getAllOrders())
        }
        catch (error) {
          setMensaje("Hubo un error, vuelve a intentarlo")
        }
      }
    }
    return (
        <div className={style.contenedor}>
            <div className={style.divComplementario}>
                <h5 className={style.tituloPedidos}>Pedidos</h5>
            </div>
            {isDetail === false ? 
            (            <div className={style.divTabla}>
              <table className={style.table}>
                  <tr className={style.tr}> 
                      <th className={style.th}>ID</th>
                      <th className={style.th}>ID Mercado Pago</th>
                      <th className={style.th}>Cliente</th>
                      <th className={style.th}>Estado</th>
                      <th className={style.th}>Fecha</th>
                      <th className={style.th}>Valor total</th>
                      <th className={style.th}>Medio de pago</th>
                      <th className={style.th}>Detalle</th>
                  </tr>
                  {orders.map((orden) => (
                  <tr className={style.tr} key={orden.id}>
                      <td className={style.td}>{orden.id}</td>
                      <td className={style.td}>{orden.idMp}</td>
                      <td className={style.td}>{orden.name + " " + orden.surname}</td>
                      <td className={style.td}>{orden.status}</td>
                      <td className={style.td}>{new Date(orden.createdAt).toLocaleString('es-CO', {year: 'numeric',month: 'numeric',day: 'numeric',hour: 'numeric',minute: 'numeric',hour12: false})}</td>
                      <td className={style.td}>${orden.totalAmount}</td>
                      <td className={style.td}>{orden.payment === 'credit_card' ? 'Tarjeta de credito' : ""}</td>
                      <td className={style.tdetail}>
                      <button className={style.botonEdit} onClick= {() => handleDetail (orden.id)}>Detalle</button>
                      </td>
                      </tr>
                      ))}
              </table>
              </div>): ( 
                <div>
                    <div className={style.divtitulo}>
                        <button onClick= {handleDetail} className={style.backPedBoton}> &#8678; </button>
                        <h4 className={style.ordenTitulo}>Orden # {detailOrder.id}</h4>
                    </div>
                    <div className={style.divInformacion}>
                      <h5 className={style.tituloSeccion}>Detalles de la orden</h5>
                      <p className={style.mensajeProductos}><strong>Fecha de creación: </strong>{new Date(detailOrder.createdAt).toLocaleString('es-CO', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false})}</p>
                      <p className={style.mensajeProductos}><strong>Valor total: </strong> ${detailOrder.totalAmount}</p>
                      <p className={style.mensajeProductos}><strong>Pago: </strong> {detailOrder.payStatus === "approved" ? "Aprobado" : "En proceso/rechazado"}</p>
                      <p className={style.mensajeProductos}><strong>Método de pago:</strong> {detailOrder.payment === 'credit_card' ? 'Tarjeta de credito' : ""}</p>
                      <p className={style.mensajeProductos}><strong>Estado de la orden: </strong>{detailOrder.status}</p>
                      {nextStatus !== "" ? (nextStatus === "Enviado" ? (<button value="Enviado" onClick={(e)=> {updateState(e); setTimeout(()=> {setIsDetail(false)}, 500)}} className={style.modifyOrdenNext}>Cambiar a Enviado</button>):(<button onClick={(e)=> {updateState(e); setTimeout(()=> {setIsDetail(false)}, 500)}} value="Entregado" className={style.modifyOrdenNext}>Cambiar a Entregado</button>)):(null)}
                      {backStatus !== "" ? (backStatus === "Pendiente" ? (<button onClick={(e)=> {updateState(e); setTimeout(()=> {setIsDetail(false)}, 500)}} value="Pendiente" className={style.modifyOrdenBack}>Cambiar a Pendiente</button>):(<button onClick={(e)=> {updateState(e); setTimeout(()=> {setIsDetail(false)}, 500)}} value="Enviado" className={style.modifyOrdenBack}>Cambiar a Enviado</button>)):(null)}
                      {/* {mensaje !== "" ? (<><p className={style.mensajeCreated}>{mensaje}</p></>):(null)} */}
                    </div>
                    <div>
                        <h5 className={style.tituloSeccion}>Productos de la orden</h5>
                        <div className={style.divProductos}>
                          {detailOrder.Products && detailOrder.Products.length > 0 ? (
                            detailOrder.Products.map((product) => {
                              return (
                              <div className={style.divProduct} key={product.id}>
                                <div className={style.divProductImage}>
                                <img className={style.productImage}src={product.firstImage} alt="" />
                                </div>
                                <p className={style.mensajeProductosLittle}> <strong>{product.name}</strong></p>
                                <p className={style.mensajeProductosLittle}> <strong>Cantidad:</strong> {product.OrderItems.quantity} unidades</p>
                                <p className={style.mensajeProductosLittle}> <strong>Precio unitario: </strong>$ {product.statusOffer === true ? (product.priceOfList*(1-(product.offer)/100)):(product.priceOfList)} </p>
                                <p className={style.mensajeProductosLittle}> <strong>Subtotal producto: </strong> $ {product.priceOfList * product.OrderItems.quantity}</p>
                              </div>
                              );})
                              ) : (null)}
                          </div>
                    </div>
                    <div className={style.divInformacion}>
                        <h5 className={style.tituloSeccion}>Información del cliente</h5>
                        <p className={style.mensajeProductos}><strong>Nombre:</strong> {detailOrder.name}</p>
                        <p className={style.mensajeProductos}><strong>Apellido:</strong> {detailOrder.surname}</p>
                        <p className={style.mensajeProductos}><strong>Numero de telefono:</strong> {detailOrder.phone}</p>
                        <p className={style.mensajeProductos}><strong>CC:</strong> {detailOrder.cc}</p>
                    </div>
                    <div className={style.divInformacion}>
                        <h5 className={style.tituloSeccion}>Información del envio </h5>
                        {detailOrder.retiro === "" ? (
                          <div>
                            <p className={style.mensajeProductos}>Pais: Colombia</p>
                            <p className={style.mensajeProductos}>Departamento: {detailOrder.department}</p>
                            <p className={style.mensajeProductos}>Ciudad: {detailOrder.city}</p>
                            <p className={style.mensajeProductos}>Dirección: {detailOrder.address}</p>
                            <p className={style.mensajeProductos}>Numero de contacto: {detailOrder.phone}</p>
                            <p className={style.mensajeProductos}>Nombre: {detailOrder.name + " " + detailOrder.surname}</p>
                          </div>
                        ):(
                            <div>
                              <p className={style.mensajeProductos}><strong>Retiro en </strong> {detailOrder.retiro} por parte del cliente</p>
                            </div>
                        )}
                    </div>
                </div>
              )}
        </div>
    )
}
export default Pedidos


