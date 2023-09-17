import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FiltroCategoria from './FiltroCategoria'
import OrderName from './OrderName'
import OrderPrice from './OrderPrecio'
import styles from './Filtros.module.css'

export default function Filtros() {
/*   const dispatch = useDispatch();
  const productos = useSelector((state) => state.productos);
  const categorias = useSelector((state) => state.categorias);
  const toShow = useSelector((state) => state.toShow);

  const [categoria, setCategoria] = useState("Todas");
  const [order, setOrder] = useState("Ninguno");
  const [precio, setPrecio] = useState("Todos"); */
  /* const [fecha, setFecha] = useState('Ninguna') */

  const [orderName, setOrderName] = useState('DEFAULT')
  const [orderPrecio, setOrderPrecio] = useState('DEFAULT')

  return (
    <>
      <div className={styles.divMain}>
        <div>
          <FiltroCategoria orderName={orderName} setOrderName={setOrderName}
          orderPrecio={orderPrecio} setOrderPrecio={setOrderPrecio}/>
        </div>
        <div>
          <OrderName orderName={orderName} setOrderName={setOrderName}
          orderPrecio={orderPrecio} setOrderPrecio={setOrderPrecio}/>
        </div>
        <div>
          <OrderPrice orderName={orderName} setOrderName={setOrderName}
           orderPrecio={orderPrecio} setOrderPrecio={setOrderPrecio}/>
        </div>
      </div>
    </>
  );
}
