import style from "../Constru.module.css";
import { Card, Text, Metric } from "@tremor/react";

const Estadisticas = () => {
  const imagen = "https://acortar.link/t7yfgg";
  return (
    <div className={style.div}>
      <h2 className={style.titulo}>Estadisticas</h2>
      <p className={style.p}>Sección en construcción</p>
      <img className={style.img} src={imagen} alt="Construcción" />
      <h1 className="text-9xl font-bold underline">Hello world!</h1>
      <Card className="max-w-xs mx-auto">
        <Text>Sales</Text>
        <Metric>$ 34,743</Metric>
      </Card>
    </div>
  );
};

export default Estadisticas;
