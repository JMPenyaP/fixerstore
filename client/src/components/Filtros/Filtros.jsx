import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FiltroCategoria from './FiltroCategoria'
import OrderName from './OrderName'
import OrderPrice from './OrderPrecio'
import styles from './Filtros.module.css'
import { getAllProducts } from "../../redux/Actions/getAllProducts";

export default function Filtros() {

  const [orderName, setOrderName] = useState('DEFAULT')
  const [orderPrecio, setOrderPrecio] = useState('DEFAULT')

  return (
    <>
      <div className={styles.divMain}>
        <div className={styles.divOne}>
          <FiltroCategoria orderName={orderName} setOrderName={setOrderName}
          orderPrecio={orderPrecio} setOrderPrecio={setOrderPrecio}/>
        </div>
        <div className={styles.divTwo}>
          <OrderName orderName={orderName} setOrderName={setOrderName}
          orderPrecio={orderPrecio} setOrderPrecio={setOrderPrecio}/>
        </div>
        <div className={styles.divThree}>
          <OrderPrice orderName={orderName} setOrderName={setOrderName}
           orderPrecio={orderPrecio} setOrderPrecio={setOrderPrecio}/>
        </div>
      </div>
    </>
  );
}
