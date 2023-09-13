const Card = ({char}) => {
    return ( 
    <>
        <li>
                <img
                width={230}
                height={345}
                src={char.image}
                alt={char.name}
                />
                <div>{char.name}</div>

        </li>
    </>
     );
}
 
export default Card;