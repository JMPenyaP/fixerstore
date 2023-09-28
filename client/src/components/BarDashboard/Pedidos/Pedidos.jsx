
import { useState } from "react";
import style from "./pedidos.module.css"


const Pedidos = () => {
    const [orders, setOrders] = useState([])

    const ordenes = [
        {
          id: 1,
          status: "pending",
          totalAmount: 150000,
          userId: "gvdghrtfghrtgerg",
          name: "Juan",
          surname: "Perez",
          phone: "3136146431",
          cc: "152684512",
          payment: "MercadoPago",
          retiro: "",
          city: "Medellín",
          department: "Antioquia",
          address: "Carrera 26 #14-15 2do piso",
          createdAt: "2023-09-27 15:17:26.026-05" 
        },
        {
          id: 2,
          status: "completed",
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
          id: 3,
          status: "shipped",
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
          id: 4,
          status: "canceled",
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
          id: 5,
          status: "processing",
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
    const [isDetail, setIsDetail] = useState(false)
    const [detailOrder, setDetailOrder] = useState({})
    const handleDetail = (id) => {
      //Solo habria que cambiar la manera en que se obtiene la orden especifica, por medio de la ruta y setearla igual en detailOrder
      const orden = ordenes.filter((or) => or.id === id)
      setDetailOrder(orden[0])
      if (isDetail) {
        setIsDetail(false)
        setDetailOrder({})
      }
      else {
        setIsDetail(true)
        setDetailOrder(orden[0])
      }

    }
    return (
        <div className={style.contenedor}>
            <div className={style.divComplementario}>
                <h5 className={style.titulo}>Pedidos</h5>
            </div>
            {isDetail === false ? 
            (            <div className={style.divTabla}>
              <table className={style.table}>
                  <tr className={style.tr}> 
                      <th className={style.th}>Orden ID</th>
                      <th className={style.th}>Cliente</th>
                      <th className={style.th}>Estado</th>
                      <th className={style.th}>Fecha</th>
                      <th className={style.th}>Valor total</th>
                      <th className={style.th}>Medio de pago</th>
                      <th className={style.th}>Detalle</th>
                  </tr>
                  {ordenes.map((orden) => (
                  <tr className={style.tr} key={orden.id}>
                      <td className={style.td}>{orden.id}</td>
                      <td className={style.td}>{orden.name + " " + orden.surname}</td>
                      <td className={style.td}>{orden.status}</td>
                      <td className={style.td}>{new Date(orden.createdAt).toLocaleString('es-CO', {year: 'numeric',month: 'numeric',day: 'numeric',hour: 'numeric',minute: 'numeric',hour12: false})}</td>
                      <td className={style.td}>${orden.totalAmount}</td>
                      <td className={style.td}>{orden.payment}</td>
                      <button onClick= {() => handleDetail (orden.id)}>
                      <td className={style.tdetail}> Detalle de la orden</td>
                      </button>
                      </tr>
                      ))}
              </table>
              </div>): ( 
                <div>
                    <div>
                        <button onClick= {handleDetail}> Back </button>
                        <h5 className={style.td}>Orden # {detailOrder.id}</h5>
                    </div>
                    <div>
                        <h5>Detalles de la orden</h5>
                        <td className={style.td}> Fecha de creación: {new Date(detailOrder.createdAt).toLocaleString('es-CO', {year: 'numeric',month: 'numeric',day: 'numeric',hour: 'numeric',minute: 'numeric',hour12: false})}</td>
                        <td className={style.td}>Estado de la orden: {detailOrder.status}</td>
                        <td className={style.td}>Valor total: ${detailOrder.totalAmount}</td>
                        <td className={style.td}>Metodo de pago: {detailOrder.payment}</td>
                    </div>
                    <div>
                        <h5>Información del cliente</h5>
                        <p>Nombre: {detailOrder.name}</p>
                        <p>Apellido: {detailOrder.surname}</p>
                        <p>Numero de telefono: {detailOrder.phone}</p>
                        <p>CC: {detailOrder.cc}</p>
                    </div>
                    <div>
                        <h5>Información del envio </h5>
                        {detailOrder.retiro === "" ? (
                            <div>
                                <td className={style.td}>Pais: Colombia</td>
                                <td className={style.td}>Departamento: {detailOrder.department}</td>
                                <td className={style.td}>Ciudad: {detailOrder.city}</td>
                                <td className={style.td}>Dirección: {detailOrder.address}</td>
                                <td className={style.td}>Numero de contacto: {detailOrder.phone}</td>
                                <td className={style.td}>Nombre: {detailOrder.name + " " + detailOrder.surname}</td>
                            </div>
                        ):(
                            <div>
                                Retiro en local {detailOrder.retiro} por parte del cliente
                            </div>
                        )}
                    </div>
                    <div>
                        <h5>Productos de la orden: </h5>
                    </div>
                </div>
              )}
        </div>
    )
}
// status: "pending",
// totalAmount: 150000,
// userId: "gvdghrtfghrtgerg",
// name: "Juan",
// surname: "Perez",
// phone: "3136146431",
// cc: "152684512",
// payment: "MercadoPago",
// retiro: "",
// city: "Medellín",
// department: "Antioquia",
// address: "Carrera 26 #14-15 2do piso",
export default Pedidos


