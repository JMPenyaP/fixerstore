import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../redux/Actions/setOrder";
import { buscaComb } from "../../redux/Actions/buscaComb";
import { setOrder2 } from "../../redux/Actions/setOrder2";
import style from "./Filtros.module.css"

export default function OrderName() {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.categoryId);
  const name = useSelector((state) => state.search);
  const order = useSelector((state) => state.order)

  const handleSelect = (value) => {
    const stored = JSON.parse(localStorage.getItem("filtros"))
    localStorage.setItem("filtros", JSON.stringify({...stored,order2:value,order:''}));
    dispatch(setOrder2(""));
    dispatch(setOrder(value));
    dispatch(buscaComb(name, categoryId, value, ''));
  };

  return (
    <>
      <div className={style.ordenadores}>
        <h2 className={style.titulo} >Ordenar A-Z</h2>
        <select
          onChange={(event) => handleSelect(event.target.value)}
          defaultValue="DEFAULT"
          value={order}
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
