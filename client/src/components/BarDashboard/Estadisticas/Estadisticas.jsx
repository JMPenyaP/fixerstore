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
  List,
  ListItem,
} from "@tremor/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Estadisticas = () => {
  const [value, setValue] = useState({
    from: "",
    to: "",
  });

  const [ordersGender, setOrdersGender] = useState();
  const [usersGender, setUsersGender] = useState();
  const [salesByMonth, setSalesByMonth] = useState();
  const [monthSales, setMonthSales] = useState();

  useEffect(() => {
    const responseOrdersByGender = async () => {
      try {
        const apiResponse = await axios.get(
          "http://localhost:3001/metrics/count-orders-by-gender"
        );

        const dataResponse = apiResponse.data;

        setOrdersGender(dataResponse);
      } catch (error) {
        alert("error", error.message);
      }
    };

    const responseUsersByGender = async () => {
      try {
        const apiResponse = await axios.get(
          "http://localhost:3001/metrics/users-by-gender"
        );

        const dataResponse = apiResponse.data;
        const newDataResponse = dataResponse.map((item) => ({
          gender: item.gender,
          cantidad: parseInt(item.cantidad, 10),
        }));

        setUsersGender(newDataResponse);
      } catch (error) {
        alert("Error", error.message);
      }
    };

    const responseSalesByMonth = async () => {
      try {
        const apiResponse = await axios.get(
          "http://localhost:3001/metrics/sales-by-month"
        );

        const dataResponse = apiResponse.data.ventasPorMes;

        setSalesByMonth(dataResponse);
      } catch (error) {
        alert("error", error.message);
      }
    };

    const responseSalesActualMonth = async () => {
      try {
        const currentDate = new Date();

        const monthNames = [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
        ];

        const currentMonthName = monthNames[currentDate.getMonth()];

        const apiResponse = await axios.get(
          `http://localhost:3001/metrics/ordermonth?month=${currentMonthName}`
        );

        const apiResponseData = apiResponse.data;

        let totalCount = 0;

        apiResponseData.forEach((item) => {
          totalCount += parseFloat(item.totalAmount);
        });

        setMonthSales({
          cantidad: apiResponseData.length,
          total: totalCount.toFixed(1),
        });

        console.log(apiResponseData.length);
      } catch (error) {
        alert("error", error.message);
      }
    };

    responseSalesActualMonth();
    responseUsersByGender();
    responseOrdersByGender();
    responseSalesByMonth();
  }, []);


  const dataFormatter = (number) => {
    return new Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap">
          <Card className="flex-1 p-5 m-5 w-1/3">
            <Title>Pedidos este mes</Title>
            <Metric>cantidad: {monthSales ? monthSales.cantidad : ""}</Metric>
            <Subtitle>Total: ${monthSales ? monthSales.total : ""}</Subtitle>
          </Card>
          <Card className="flex-1 p-5 m-5 w-1/3">
            <Title>Usuarios</Title>
            <DonutChart
              className="mt-6"
              data={usersGender}
              category="cantidad"
              index="gender"
              colors={["sky", "teal", "indigo", "rose", "cyan", "amber"]}
            />
          </Card>
          <Card className="flex-1 p-5 m-5 w-1/3">
            <Title>Cantidad de ventas</Title>
            <DonutChart
              className="mt-6"
              data={ordersGender}
              category="cantidad"
              index="name"
              colors={["sky", "teal", "indigo", "rose", "cyan", "amber"]}
            />
          </Card>
        </div>
        <div className="w-1/1 flex items-center justify-center p-0 m-0">
          <Card className=" p-5 m-5">
            <Title className="w-1/2 p-0 m-0">Ventas por mes</Title>
            <Subtitle className="w-1/2 p-0 m-0">Facturación en COP mensual</Subtitle>
            <BarChart
              className=" w-3/4 m-0 p-0 mx-auto"
              data={salesByMonth}
              index="mes"
              categories={["totalVentas"]}
              colors={["sky"]}
              valueFormatter={dataFormatter}
              yAxisWidth={50}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Estadisticas;
