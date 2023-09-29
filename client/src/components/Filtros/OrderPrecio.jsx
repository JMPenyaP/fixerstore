import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrder2 } from "../../redux/Actions/setOrder2";
import { buscaComb } from "../../redux/Actions/buscaComb";
import { setOrder } from "../../redux/Actions/setOrder";

export default function OrderPrecio() {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.categoryId)
  const name = useSelector((state) => state.search)
  const order2 = useSelector((state) => state.order2)

  const handleSelect = (value) => {
    dispatch(setOrder(''))
    dispatch(setOrder2(value));
    dispatch(buscaComb(name, categoryId, '', value));
  };

  return (
    <>
      <div>
        <select
          onChange={(event) => handleSelect(event.target.value)}
          defaultValue="DEFAULT"
          value={order2}
        >
          <option value="DEFAULT">Precio</option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>
      </div>
    </>
  );
}
