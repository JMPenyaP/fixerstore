import style from "../Constru.module.css";
import {
  Card,
  Text,
  Metric,
  Title,
  BarChart,
  Subtitle,
  DonutChart,
  DateRangePicker,
} from "@tremor/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Estadisticas = () => {
  const [value, setValue] = useState({
    from: "",
    to: "",
  });

  useEffect(() => {
    console.log(value);
  }, [value]);
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
      name: "Masculino",
      cantidad: 122,
    },
    {
      name: "Femenino",
      cantidad: 182,
    },
    {
      name: "No definido",
      cantidad: 37,
    },
  ];

  const valueFormatter = (number) =>
    `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

  const dataFormatter = (number) => {
    return new Intl.NumberFormat("us").format(number).toString();
  };

  const response = async () => {
    const apiResponse = await axios.get("http://localhost:3001/metrics/");
  };

  return (
    <div className={style.divEstadisticas}>
      <div className="flex flex-row justify-around mb-5">
        <Card className="w-6/12">
          <DateRangePicker
            className="max-w-sm mx-auto"
            enableSelect={true}
            value={value}
            onValueChange={setValue}
            selectPlaceholder="Seleccionar"
          />
          <Title>Ingresos totales</Title>
          <Metric>$ 34,743</Metric>
        </Card>
        <Card className="w-6/12">
          <Title>Ingresos este mes</Title>
          <Metric>$ 34,743</Metric>
        </Card>
        <Card className="w-6/12">
          <Title>Usuarios</Title>
          <DonutChart
            className="mt-6"
            data={cities}
            category="cantidad"
            index="name"
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
