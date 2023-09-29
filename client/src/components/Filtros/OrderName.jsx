import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../../redux/Actions/setOrder";
import { buscaComb } from "../../redux/Actions/buscaComb";
import { setOrder2 } from "../../redux/Actions/setOrder2";

export default function OrderName() {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.categoryId);
  const name = useSelector((state) => state.search);
  const order = useSelector((state) => state.order)

  const handleSelect = (value) => {
    dispatch(setOrder2(""));
    dispatch(setOrder(value));
    dispatch(buscaComb(name, categoryId, value, ''));
  };

  return (
    <>
      <div>
        <select
          onChange={(event) => handleSelect(event.target.value)}
          defaultValue="DEFAULT"
          value={order}
        >
          <option value="DEFAULT">Nombre</option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>
      </div>
    </>
  );
}
