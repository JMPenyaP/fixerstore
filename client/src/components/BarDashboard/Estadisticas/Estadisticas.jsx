import style from "../Constru.module.css";

const Estadisticas = () => {
  const imagen = "https://acortar.link/t7yfgg";
  return (
    <div className={style.div}>
      <h2 className={style.titulo}>Estadisticas</h2>
      <p className={style.p}>Sección en construcción</p>
      <img className={style.img} src={imagen} alt="Construcción" />
      <h1 className="text-9xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Estadisticas;
