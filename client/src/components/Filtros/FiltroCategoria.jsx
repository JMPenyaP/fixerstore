import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/Actions/getCategories";
import style from "./Filtros.module.css";
import { filterBack } from "../../redux/Actions/filterBack";
import { buscaComb } from "../../redux/Actions/buscaComb";
import { setCategoryId } from "../../redux/Actions/setCategoryId";
import { showFilters } from "../../redux/Actions/showFilters";
import { setOrder } from "../../redux/Actions/setOrder";
import { setNameSearch } from "../../redux/Actions/setNameSearch";
import { setOrder2 } from "../../redux/Actions/setOrder2";
import { setBuscaComb } from "../../redux/Actions/setBuscaComb";

const FiltroCategoria = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.allCategories);
  const categoryId = useSelector(state=> state.categoryId)
  const name = useSelector((state) => state.search);
  const order = useSelector((state) => state.order);
  const order2 = useSelector((state) => state.order2);
  const categoryGlobal = useSelector((state) => state.categoryId);
  const Products = useSelector((state) => state.prodBuscaComb);


  useEffect(() => {
    allCategories?.length === 0 && dispatch(getCategories());
    // return () => {
    //   dispatch(setBuscaComb([]));
    // }
  }, [allCategories, dispatch]);

  // useEffect(() => {
  //   const storedFilters = JSON.parse(localStorage.getItem("filtros")) || [];
  //   if (categoryGlobal === 0 || name === '' || order === '' || order2 === '') {

  //       dispatch(showFilters(true));
  //       dispatch(setCategoryId(storedFilters.categoryId));
  //       dispatch(setOrder(storedFilters.order));
  //       dispatch(setOrder2(storedFilters.order2));
  //       dispatch(setNameSearch(storedFilters.name));

  //   }
    
  // }, [categoryId,name,order,order2]);

  /* const shouldRenderCategory = (categoryId) => {
    if (categoryId === 0) {
      return true; // Si se selecciona "Todos", siempre se muestra
    }
    // Comprueba si el categoryId está presente en los Products
    const hasProductsInCategory = Products.some((product) => product.categoryId === categoryId);
  console.log(`Category ${categoryId} has products: ${hasProductsInCategory}`);
  return hasProductsInCategory;
  }; */

  // Estado para rastrear el filtro seleccionado
  /* const [actualBoton, setActualBoton] = useState("DEFAULT"); // Estado para rastrear el botón actual */

  const handleSection = (categoryId /* categoryId local */) => {

    if (categoryId === 0) {
      dispatch(showFilters(false));
      dispatch(setCategoryId(0));
      dispatch(setOrder(""));
      dispatch(setOrder2(""));
      dispatch(setNameSearch(""));
    } else {
      dispatch(showFilters(true));
      dispatch(setCategoryId(categoryId));
      const stored = JSON.parse(localStorage.getItem("filtros"))
      localStorage.setItem("filtros", JSON.stringify({...stored,categoryId}));
      dispatch(buscaComb(name, categoryId, order, order2));
    }
  };

  return (
    <>
      <div className={style.divMain}>
        <h2 className={style.titulo}>Categorias</h2>
        <div className={style.buttonContainer}>
          <button
            className={categoryGlobal === 0 ? style.onBoton : style.offBoton}
            onClick={() => handleSection(0)}
          >
            Todos
          </button>

          {allCategories?.map(
            (category, index) =>
              /* shouldRenderCategory(category.id) && */ (
                <button
                  key={index}
                  onClick={() => handleSection(category.id)}
                  className={
                    categoryGlobal === category.id
                      ? style.onBoton
                      : style.offBoton
                  }
                >
                  {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                </button>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default FiltroCategoria;
