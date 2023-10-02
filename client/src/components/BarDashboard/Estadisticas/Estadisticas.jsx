import style from "../Constru.module.css";
import {
  Card,
  Text,
  Metric,
  Title,
  BarChart,
  Subtitle,
  DonutChart,
} from "@tremor/react";

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

  const cities = [
    {
      name: "New York",
      sales: 9800,
    },
    {
      name: "London",
      sales: 4567,
    },
    {
      name: "Hong Kong",
      sales: 3908,
    },
    {
      name: "San Francisco",
      sales: 2400,
    },
    {
      name: "Singapore",
      sales: 1908,
    },
    {
      name: "Zurich",
      sales: 1200,
    },
  ];

  const valueFormatter = (number) =>
    `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

  const dataFormatter = (number) => {
    return new Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <div className={style.divEstadisticas}>
      <div className="flex flex-row mb-5">
        <Card className="max-w-xs mx-auto">
          <Text>Ingresos totales</Text>
          <Metric>$ 34,743</Metric>
        </Card>
        <Card className="max-w-xs mx-auto">
          <Text>Ingresos este mes</Text>
          <Metric>$ 34,743</Metric>
        </Card>
        <Card className="max-w-lg">
          <Title>Usuarios</Title>
          <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        </Card>
      </div>
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
