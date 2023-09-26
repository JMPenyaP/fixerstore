import styles from './Pasarela.module.css'


const Ticket = ({carrito}) => {
    return ( 
        <>
        {console.log(carrito)}
        <div>
            {carrito?.map((product)=>(
                <div className={styles.divMain}  key={product.name}>
                    <div className={styles.ticket}>
                        <div className={styles.span}>
                            <span>{product.cantidad}|{product.name}</span>
                        </div>
                        <img className={styles.img} src={product.image} alt={product.name} width={'60px'} height={'60px'} />
                    </div>
                    <div>
                        <span>${product.precio}</span>
                    </div>
                    <div className={styles.separador}></div>
                    
                </div>
            ))}
        </div>
        </>
     );
}
 
export default Ticket;

// {allProductsFiltrado?.map((product) => (

//     <div key={product.id}>
//         <Card product={product} />
//     </div>
    
//  ))}