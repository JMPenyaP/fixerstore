import { useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import Filtros from "../../components/Filtros/Filtros";
import { useDispatch, useSelector } from "react-redux";
import { clearProductName } from "../../redux/Actions/clearProductName";
import style from "./Catalogo.module.css";
import Footer from "../../components/Footer/Footer";
import CardsArr from "../../components/Cards/CardsArr";
import { setOrder } from "../../redux/Actions/setOrder";
import { setNameSearch } from "../../redux/Actions/setNameSearch";
import { setCategoryId } from "../../redux/Actions/setCategoryId";
import { showFilters } from "../../redux/Actions/showFilters";
import { setOrder2 } from "../../redux/Actions/setOrder2";
import { setBuscaComb } from "../../redux/Actions/setBuscaComb";

const Catalogo = () => {
  const dispatch = useDispatch();

  // const productosFiltrados = useSelector((state) => state.productosFiltrados);
  const productosFiltrados = useSelector((state) => state.prodBuscaComb);
  const Products = useSelector((state) => state.showFilters)
  const name = useSelector((state) => state.search)

  /*  const handlerFilter = () => {
    dispatch(setFiltros())
  }; */

  useEffect(() => {
    dispatch(clearProductName());
    // return () => {
    //   dispatch(showFilters(false))
    //   dispatch(setOrder(''))
    //   dispatch(setOrder2(''))
    //   dispatch(setNameSearch(''))
    //   dispatch(setCategoryId(0))
    //   dispatch(setBuscaComb([]))
    // }
  }, [dispatch]);

  useEffect(()=>{
    const stored = JSON.parse(localStorage.getItem("filtros"))
    localStorage.setItem("filtros", JSON.stringify({...stored,name}));
  },[name])

  return (
    <>
      <div>
        <div className={style.divMain}>

          <div>
            <Filtros />
          </div>

          {Products ?

            <CardsArr allProducts={productosFiltrados} />

            :
            <div >

              <Cards />
            </div>
          }

        </div>

        <div>
          <Footer />
        </div>

      </div>
    </>
  );
};

export default Catalogo;
