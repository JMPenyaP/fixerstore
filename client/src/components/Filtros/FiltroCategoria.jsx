
const FiltroCategoria = () => {
    // const dispatch = useDispatch();
    // const allGenres = useSelector( state => state.allGenres )
    
    // useEffect(() => {
    //     dispatch( getAllGenres() )
    // },[ dispatch ]);
    
    // const handleSelect =  ( event ) => {
    //     const value = event.target.value;
    //     dispatch( filterGenre( value ));
    // };
    return ( 
        <>
            <div>
                {/* <select onChange={handleSelect}> */}
                <select>
                    <option  disabled selected value="DEFAULT">Category</option>
                    <option value="all">All</option>
                    <option value="limpieza">Limpieza</option>
                    <option value="servicio">Servicio</option>
                    <option value="cuidado">Cuidado</option>
                    {/* {
                        allCategory.map(( category, index ) => {
                            return(
                                <option  value={ category } key={ index } > { category } </option>
                            )
                        })    
                    } */}
                </select>
            </div>
        </>
     );
}
 
export default FiltroCategoria;