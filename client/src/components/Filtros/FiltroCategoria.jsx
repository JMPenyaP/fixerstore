import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/Actions/getCategories";
import { filterCategories } from "../../redux/Actions/filterCategories";
import { orderLetter } from "../../redux/Actions/orderLetter";
import style from './select.module.css'

const FiltroCategoria = ({
  orderName,
  orderPrice,
  setOrderName,
  setOrderPrecio,
}) => {

  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.allCategories);

  useEffect(() => {
    allCategories?.length === 0 && dispatch(getCategories());
  },[allCategories, dispatch]);

  const handleSelect = (event) => {
    const value = event.target.value;
    dispatch(orderLetter())
    setOrderName('DEFAULT')
    setOrderPrecio('DEFAULT')
    dispatch(filterCategories(value));
  };
  return (
    <>
      <div>
        <select onChange={handleSelect} className={style.selectBox}>
          <option disabled selected value="DEFAULT">
            Categoria
          </option>
          <option value="all">All</option>
          {allCategories?.map((category, index) => {
            return (
              <option value={category.id} key={index}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default FiltroCategoria;
