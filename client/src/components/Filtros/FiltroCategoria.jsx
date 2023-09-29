import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/Actions/getCategories";
import style from './Filtros.module.css';
import { filterBack } from "../../redux/Actions/filterBack";
import { buscaComb } from "../../redux/Actions/buscaComb";
import { setCategoryId } from "../../redux/Actions/setCategoryId";
import { showFilters } from "../../redux/Actions/showFilters";
import { setOrder } from "../../redux/Actions/setOrder";
import { setNameSearch } from "../../redux/Actions/setNameSearch";
import { setOrder2 } from "../../redux/Actions/setOrder2";

const FiltroCategoria = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.allCategories);
  const name = useSelector((state) => state.search)
  const order = useSelector((state) => state.order)
  const order2 = useSelector((state) => state. order2)
  const categoryGlobal = useSelector((state) => state.categoryId)

  useEffect(() => {
    allCategories?.length === 0 && dispatch(getCategories());
  }, [allCategories, dispatch]);

  // Estado para rastrear el filtro seleccionado
  /* const [actualBoton, setActualBoton] = useState("DEFAULT"); // Estado para rastrear el botón actual */

  const handleSection = (categoryId /* categoryId local */) => {
    if(categoryId === 0){
      dispatch(showFilters(false))
      dispatch(setCategoryId(0))
      dispatch(setOrder(''))
      dispatch(setOrder2(''))
      dispatch(setNameSearch(''))
    }else{
      dispatch(showFilters(true))
      /* setActualBoton(categoryId); */
      /* dispatch(filterBack(boton)) */ 
      dispatch(setCategoryId(categoryId))
      dispatch(buscaComb( name, categoryId, order, order2))
      //handlesection envia category.id local, setea en EG categoryId con el enviado (category.id local), dispatch para traer los productos filtrados(traer de redux name)
    }
  };

  return (
    <>
      <div className={style.divMain}>
        <h2>Categorias</h2>
            <div className={style.buttonContainer}>
            <button
              className={categoryGlobal === 0 ? style.onBoton : style.offBoton}
              onClick={() => handleSection(0)}
            >
              Todos
            </button>
          
            {allCategories?.map((category, index) => (
              <button
                key={index}
                onClick={() => handleSection(category.id)}
                className={categoryGlobal === category.id ? style.onBoton : style.offBoton}
              >
                {category.name}
              </button>
            ))}
        </div>
      </div>
    </>
  );
};

export default FiltroCategoria;