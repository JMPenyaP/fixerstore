import FiltroCategoria from './FiltroCategoria'
import styles from './Filtros.module.css'


export default function Filtros() {

  // const [orderName, setOrderName] = useState('DEFAULT')
  // const [orderPrecio, setOrderPrecio] = useState('DEFAULT')

  return (
    <>
      <div className={styles.divMain}>
        <div className={styles.divOne}>
          <FiltroCategoria />
        </div>
        {/* <div className={styles.divTwo}>
          <OrderName orderName={orderName} setOrderName={setOrderName}
          orderPrecio={orderPrecio} setOrderPrecio={setOrderPrecio}/>
        </div>
        <div className={styles.divThree}>
          <OrderPrice orderName={orderName} setOrderName={setOrderName}
           orderPrecio={orderPrecio} setOrderPrecio={setOrderPrecio}/>
        </div> */}
      </div>
    </>
  );
}
