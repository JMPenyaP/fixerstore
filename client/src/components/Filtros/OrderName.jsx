import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../redux/Actions/setOrder";
import { buscaComb } from "../../redux/Actions/buscaComb";


export default function OrderName({
  orderName,
  setOrderName,
  orderPrecio,
  setOrderPrecio,
}) {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.categoryId)
  const name = useSelector((state) => state.search)

  const handleSelect = (value) => {
      setOrderPrecio("DEFAULT");
      setOrderName(value);
      dispatch(buscaComb(name, categoryId, value));
  };

  return (
    <>
      <div>
        <select
          onChange={(event) => handleSelect(event.target.value)}
          defaultValue="DEFAULT"
          value={orderName}
        >
          <option value="DEFAULT" disabled>Nombre</option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>
      </div>
    </>
  );
}
