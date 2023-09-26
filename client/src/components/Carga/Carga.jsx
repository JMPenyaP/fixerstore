import { ThreeCircles } from "react-loader-spinner";
import style from "./Carga.module.css";

export function Spinner() {
  return (
    <div className={style.divSpinner}>
      <ThreeCircles
        height="100"
        width="100"
        color="#3cbbed"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
}
