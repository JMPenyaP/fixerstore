import styles from './Pasarela.module.css'


const Ticket = ({carrito}) => {
    return ( 
        <>
        {console.log(carrito)}
        <div>
            {carrito?.map((product)=>(
                <div className={styles.divMain}  key={product.name}>

                    <div className={styles.ticket}>

                        <img className={styles.img} src={product.image} alt={product.name} width={'70px'} height={'70px'} />

                        

                        <div className={styles.divSpan}>
                            <span className={styles.span1}>{product.name}</span>
                            <span className={styles.span2}>precio:${product.precio}</span>
                            <span className={styles.span3}><b>Cantidad: </b> {product.cantidad}</span>
                        </div>

                        <h5>${product.precio*product.cantidad}</h5>

                        
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