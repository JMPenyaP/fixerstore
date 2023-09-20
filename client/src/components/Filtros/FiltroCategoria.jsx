import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/Actions/getCategories";
import style from './Filtros.module.css';

const FiltroCategoria = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.allCategories);

  useEffect(() => {
    allCategories?.length === 0 && dispatch(getCategories());
  }, [allCategories, dispatch]);

  // Estado para rastrear el filtro seleccionado
  const [actualBoton, setActualBoton] = useState("DEFAULT"); // Estado para rastrear el botón actual

  const handleSection = (boton) => {
    if(boton === actualBoton){
      return
    }
    setActualBoton(boton);
    // dispatch(getFiltro(boton))
  };

  return (
    <>
      <div className={style.divMain}>
        <h2>Categorias</h2>
            <div className={style.buttonContainer}>
            <button
              className={actualBoton === 'DEFAULT' ? style.onBoton : style.offBoton}
              onClick={() => handleSection("DEFAULT")}
            >
              Todos
            </button>
          
            {allCategories?.map((category, index) => (
              <button
                key={index}
                onClick={() => handleSection(category.name)}
                className={actualBoton === category.name ? style.onBoton : style.offBoton}
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