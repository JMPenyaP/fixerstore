import style from "./compras.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userHistorial } from "../../../redux/Actions/userHistorial";
import ReviewModal from "../Compras/Review/Modal";
import { sendReview } from "../../../redux/Actions/sendReview";
import axios from 'axios'
import { useParams } from "react-router-dom";

const Compras = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch()
  const [userId, setUserId] = useState(null)

  const dataProfileActual = useSelector((state) => (state.dataProfile === null ? { userData: { name: "", email: "", surname: "" } } : state.dataProfile));
  const { userData } = dataProfileActual
  const [orders, setOrders] = useState([])
  const historial = useSelector((state) => state.historial)
  useEffect(()=> {
    dispatch(userHistorial)
  }, [dispatch])
  useEffect(() => {

      dispatch(userHistorial(id));
      setOrders(historial)

  }, [orders]);

  
  
  const [rev, setRev] = useState(false)
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  
    const [reviewData, setReviewData] = useState({ productId: null, userId: null });
    
    const [isDetail, setIsDetail] = useState(false)
    const [detailOrder, setDetailOrder] = useState({})

    const [idOrden, setIdOrden] = useState("")
    
    const handleDetail = async (id, UserId) => {
      
      if(historial.length === 0) {

        const orden = historial.filter((or) => or.id === id)
        console.log(orden);
        setDetailOrder(orden[0])
        if (isDetail) {
          setIsDetail(false)
          setDetailOrder({})
        }
        else {
          setIsDetail(true)
          setUserId(UserId)
          setDetailOrder(orden[0])
          setIdOrden(orden[0].id)
        }

        
        
      } else if (historial.length > 0) {
        if(isDetail) {
          setIsDetail(false)
          setDetailOrder({})
        } else {
          const endpoint = `http://localhost:3001/order/id/${id}`
          const response = await axios.get(endpoint)
          const orden = response.data
          const {order} = orden 
          setIsDetail(true)
          setDetailOrder(order)
          setIdOrden(order.id)
          if(order.status === 'Entregado'){
            setRev(true)
          }else {
            setRev(false)
          }
        }
      }
    }
    
    const openReviewModal = (productId) => {
      setIsReviewModalOpen(true);
      setReviewData({ productId, userId });
    };
    
    const closeReviewModal = () => {
      setIsReviewModalOpen(false);
    };


  
  return (
    <div className={style.contenedor}>
    <div className={style.divComplementario}>
        <h5 className={style.tituloPedidos}>Pedidos</h5>
    </div>
    {isDetail === false ? 
    (            <div className={style.divTabla}>
      <table className={style.table}>
        <thead>
          <tr className={style.tr}> 
              <th className={style.th}>Orden ID</th>
              <th className={style.th}>Estado</th>
              <th className={style.th}>Fecha</th>
              <th className={style.th}>Valor total</th>
              <th className={style.th}>Medio de pago</th>
              <th className={style.th}>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {historial.map((orden) => (
            <tr className={style.tr} key={orden.id}>
              <td className={style.td}>{orden.id}</td>
              <td className={style.td}>{orden.status}</td>
              <td className={style.td}>{new Date(orden.createdAt).toLocaleString('es-CO', {year: 'numeric',month: 'numeric',day: 'numeric'})}</td>
              <td className={style.td}>${orden.totalAmount}</td>
              <td className={style.td}>{orden.payment === 'credit_card' ? 'Tarjeta de credito' : ""}</td>
              <td className={style.tdetail}>
              <button className={style.botonEdit} onClick= {() => handleDetail (orden.id, orden.UserId)}>Detalle</button>
              </td>
              </tr>
              ))}
              </tbody>
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
              <p className={style.mensajeProductos}><strong>Método de pago:</strong> {detailOrder.payment === 'credit_card' ? 'Tarjeta de credito' : ""}</p>
              <p className={style.mensajeProductos}><strong>Estado de la orden: </strong>{detailOrder.status}</p>            </div>
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
            <div>
                <h5 className={style.tituloSeccion}>Productos de la orden</h5>
                <div className={style.divProductos}>
                  {detailOrder.Products && detailOrder.Products.length > 0 ? (
                    detailOrder.Products.map((product) => {
                      return (
                        <>
                      <div className={style.divProduct} key={product.id}>
                        <div className={style.divProductImage}>
                        <img className={style.productImage}src={product.firstImage} alt="" />
                        </div>
                        <p className={style.mensajeProductosLittle}> <strong>{product.name}</strong></p>
                        <p className={style.mensajeProductosLittle}> <strong>Cantidad:</strong> {product.OrderItems.quantity} unidades</p>
                        <p className={style.mensajeProductosLittle}> <strong>Precio unitario: </strong>$ {product.statusOffer === true ? (product.priceOfList*(1-(product.offer)/100)):(product.priceOfList)} </p>
                        <p className={style.mensajeProductosLittle}> <strong>Subtotal producto: </strong> $ {product.statusOffer === true ? ((product.priceOfList*(1-(product.offer)/100)) * product.OrderItems.quantity) : product.priceOfList * product.OrderItems.quantity}</p>
                      { rev && <button className={style.buttonReview} onClick={() => openReviewModal(product.id)}>Dejanos tu opinion</button>}                      
                      {isReviewModalOpen && (
                        <ReviewModal
                          isOpen={isReviewModalOpen}
                          onClose={closeReviewModal}
                          onSubmit={(reviewDataFromModal) => {

                            const finalReviewData = {
                              ...reviewDataFromModal,
                              ProductId: reviewData.productId,
                              userId: userData.id
                            }
                            // Aquí puedes manejar la lógica para enviar la reseña (reviewData)
                            // Por ejemplo, puedes enviarlo al servidor o almacenarlo en el estado de tu aplicación.
                            dispatch(sendReview(finalReviewData))
                            // Cierra el modal después de enviar la reseña
                            setTimeout(() => {closeReviewModal()}, 1500)
                          }}
                        />
                      )}
                      </div>
                        </>
                      );})
                      ) : (null)}
                </div>

            </div>
        </div>
      )}
</div>
  );
};

export default Compras;

/* const ordenes = [
        {
          id: 1,
          fecha: "2023-09-22",
          estado: "En proceso",
          valorTotal: 150.0,
          medioDePago: "Tarjeta de crédito",
          detalle: "Detalles de la orden 1",
        },
        {
          id: 2,
          fecha: "2023-09-23",
          estado: "Entregado",
          valorTotal: 80.5,
          medioDePago: "PayPal",
          detalle: "Detalles de la orden 2",
        },
        {
          id: 3,
          fecha: "2023-09-24",
          estado: "Pendiente",
          valorTotal: 200.75,
          medioDePago: "Transferencia bancaria",
          detalle: "Detalles de la orden 3",
        },
        {
          id: 4,
          fecha: "2023-09-25",
          estado: "Cancelado",
          valorTotal: 50.0,
          medioDePago: "Efectivo",
          detalle: "Detalles de la orden 4",
        },
        {
          id: 5,
          fecha: "2023-09-26",
          estado: "Entregado",
          valorTotal: 120.25,
          medioDePago: "Tarjeta de débito",
          detalle: "Detalles de la orden 5",
        },
      ]; */

      /* const ordenes = [
      {
        "id": 10,
        "status": "delivered",
        "totalAmount": "725.00",
        "UserId": "7376eaed-c524-49b3-a0ea-b1cc1314d9d0",
        "name": "Andres",
        "surname": "Rodriguez",
        "phone": "3105487561",
        "cc": "20644880",
        "payment": "Bancolombia",
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
              "orderedProductoId": null
            },
            "Category": {
              "id": 2,
              "name": "cordones"
            }
      }]}] */