import styles from './Card.module.css'

const Card = ({char}) => {
    return ( 
    <>
        <div className={styles.divCard}>
            <div>
                <img
                className={styles.img}
                width={230}
                height={260}
                src={char.image}
                alt={char.name}
                />
            </div>

            <div className={styles.divInfo}>
                <span >{char.name}</span>
                <span >${char.id}</span>
            </div>
            

        </div>
    </>
     );
}
 
export default Card;