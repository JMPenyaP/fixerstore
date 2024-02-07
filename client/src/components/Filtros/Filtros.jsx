import FiltroCategoria from './FiltroCategoria'
import OrderName from '../Filtros/OrderName'
import OrderPrice from '../Filtros/OrderPrecio'
import styles from './Filtros.module.css'

export default function Filtros() {

  return (
    <>
      <div className={styles.divMain}>
        <div className={styles.divOne}>
          <FiltroCategoria />
        </div>
        <div className={styles.query}>
          <div className={styles.divTwo}>
            <OrderName />
          </div>
          <div className={styles.divThree}>
            <OrderPrice />
          </div>
        </div>
      </div>
    </>
  );
}
