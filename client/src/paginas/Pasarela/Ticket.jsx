import styles from './Pasarela.module.css'


const Ticket = ({carrito}) => {
    return ( 
        <>
        {console.log(carrito)}
        <div>
            {carrito?.map((product)=>(
                <div className={styles.divMain}  key={product.name}>
                    <div className={styles.ticket}>
                        <span>{product.cantidad}|{product.name}</span><img src={product.firstImage} alt={product.name} width={'40px'} height={'40px'} />
                    </div>
                    <div>
                        <span>${product.priceOfList}</span>
                    </div>
                    
                    
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