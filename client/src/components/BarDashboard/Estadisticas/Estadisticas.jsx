import style from "../Constru.module.css";
import { Card, Text, Metric, Title, BarChart, Subtitle } from "@tremor/react";

const Estadisticas = () => {
  const chartdata = [
    {
      name: "enero",
      "cantidad de ventas por mes": 2488,
    },
    {
      name: "febrero",
      "cantidad de ventas por mes": 1445,
    },
    {
      name: "marzo",
      "cantidad de ventas por mes": 743,
    },
    {
      name: "abril",
      "cantidad de ventas por mes": 621,
    },
    {
      name: "mayo",
      "cantidad de ventas por mes": 834,
    },
    {
      name: "junio",
      "cantidad de ventas por mes": 1092,
    },
    {
      name: "julio",
      "cantidad de ventas por mes": 1532,
    },
    {
      name: "agosto",
      "cantidad de ventas por mes": 1987,
    },
    {
      name: "septiembre",
      "cantidad de ventas por mes": 1675,
    },
  ];

  const dataFormatter = (number) => {
    return new Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <div className={style.divEstadisticas}>
      <Card className="max-w-xs mx-auto">
        <Text>Sales</Text>
        <Metric>$ 34,743</Metric>
      </Card>
      <Card className="w-70">
        <Title>Number of species threatened with extinction (2021)</Title>
        <Subtitle>
          The IUCN Red List has assessed only a small share of the total known
          species in the world.
        </Subtitle>
        <BarChart
          className="mt-6"
          data={chartdata}
          index="name"
          categories={["cantidad de ventas por mes"]}
          colors={["sky"]}
          valueFormatter={dataFormatter}
          yAxisWidth={48}
        />
      </Card>
    </div>
  );
};

export default Estadisticas;
