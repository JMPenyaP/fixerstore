// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { orderLetter } from "../../redux/Actions/orderLetter";
// import style from './select.module.css'

// export default function OrderName({
//   orderName,
//   setOrderName,
//   orderPrecio,
//   setOrderPrecio,
// }) {
//   const dispatch = useDispatch();

//   const handleSelect = (value) => {
//     setOrderPrecio("DEFAULT");
//     switch (value) {
//       case "Ascendente":
//         setOrderName("Ascendente");
//         dispatch(orderLetter(value));
//         break;

//       default:
//         setOrderName("Descendente");
//         dispatch(orderLetter(value));
//         break;
//     }
//   };

//   return (
//     <>
//       <div>
//         <select
//           onChange={(event) => handleSelect(event.target.value)}
//           defaultValue="DEFAULT"
//           value={orderName}
//           className={style.selectBox}
//         >
//           <option value="DEFAULT" disabled>Nombre</option>
//           <option value="Ascendente">Ascendente</option>
//           <option value="Descendente">Descendente</option>
//         </select>
//       </div>
//     </>
//   );
// }
