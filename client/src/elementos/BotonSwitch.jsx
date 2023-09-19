import styles from './BotonSwitch.module.css'
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../redux/Actions/getAllProducts';
const BotonSwitch = ({filtroActivo,setFiltroActivo}) => {
    const dispatch = useDispatch();
    

    const handleCheckboxChange = (event) => {
        const { checked } = event.target;
        if(checked===false){
          dispatch(getAllProducts())
        }
        setFiltroActivo(!filtroActivo);
      };
  
    return (
      <label className={styles.switchContainer}>
        <input
          type="checkbox"
          className={styles.switchInput}
          checked={filtroActivo}
          onChange={handleCheckboxChange}
        />
        <span className={styles.slider}></span>
      </label>
    );
  };
 
export default BotonSwitch;