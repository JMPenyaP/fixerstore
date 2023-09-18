import React from "react";
import { useDispatch } from "react-redux";
import { orderPrice } from "../../redux/Actions/orderPrice";
import { useState } from "react";
import style from './select.module.css'

export default function OrderPrecio({orderName,
  setOrderName,
  orderPrecio,
  setOrderPrecio,}) {

  const dispatch = useDispatch();

  const handleSelect = (value) => {
    setOrderName("DEFAULT");
    switch (value) {
      case "Ascendente":
        setOrderPrecio("Ascendente");
        dispatch(orderPrice(value));
        break;

      default:
        setOrderPrecio("Descendente");
        dispatch(orderPrice(value));
        break;
    }
  };

  return (
    <>
      <div>
      <select
          onChange={(event) => handleSelect(event.target.value)}
          defaultValue="DEFAULT"
          value={orderPrecio}
          className={style.selectBox}
        >
          <option value="DEFAULT" disabled>
            Precio
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
      </div>
    </>
  );
}
