import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder2 } from "../../redux/Actions/setOrder2";
import { buscaComb } from "../../redux/Actions/buscaComb";
import { setOrder } from "../../redux/Actions/setOrder";
import style from "./Filtros.module.css"

export default function OrderPrecio() {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.categoryId)
  const name = useSelector((state) => state.search)
  const order2 = useSelector((state) => state.order2)

  const handleSelect = (value) => {
    const stored = JSON.parse(localStorage.getItem("filtros"))
    localStorage.setItem("filtros", JSON.stringify({...stored,order:value,order2:''}));
    dispatch(setOrder(''))
    dispatch(setOrder2(value));
    dispatch(buscaComb(name, categoryId, '', value));
  };

  return (
    <>
      <div className={style.ordenadores}>
        <h2 className={style.titulo} >Ordenar por precio</h2>
        <select
          onChange={(event) => handleSelect(event.target.value)}
          defaultValue="DEFAULT"
          value={order2}
          className={style.selectOrden}
        >
          <option value="DEFAULT" disabled>Selecciona</option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>
      </div>
    </>
  );
}
