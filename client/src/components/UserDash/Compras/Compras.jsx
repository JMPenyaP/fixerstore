import style from "./compras.module.css"


const Compras = () => {
    const ordenes = [
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
      ];
    return (
        <div className={style.contenedor}>
            <div className={style.divComplementario}>
                <h5 className={style.titulo}>Mis compras</h5>
            </div>
            <div className={style.divTabla}>
            <table className={style.table}>
                <tr className={style.tr}> 
                    <th className={style.th}>Orden ID</th>
                    <th className={style.th}>Fecha</th>
                    <th className={style.th}>Estado</th>
                    <th className={style.th}>Valor total</th>
                    <th className={style.th}>Medio de pago</th>
                    <th className={style.th}>Detalle</th>
                </tr>
                {ordenes.map((orden) => (
                <tr className={style.tr} key={orden.id}>
                    <td className={style.td}>{orden.id}</td>
                    <td className={style.td}>{orden.fecha}</td>
                    <td className={style.td}>{orden.estado}</td>
                    <td className={style.td}>${orden.valorTotal*1000}</td>
                    <td className={style.td}>{orden.medioDePago}</td>
                    <td className={style.tdetail}>{orden.detalle}</td>
                    </tr>
                    ))}
            </table>
            </div>
        </div>
    )
}

export default Compras
