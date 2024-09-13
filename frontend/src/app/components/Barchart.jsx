"use client";

import { BarChart } from "@tremor/react";
import axios from "axios";
import { useState } from "react";

const BarChartHero = () => {
  const [barData, setBarData] = useState();
  const getBarChartInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios("http://localhost:8008/records/barChartInfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBarData();
    } catch (error) {}
  };

  const chartdata = [
    {
      date: "Jan 23",
      SolarPanels: 2890,
      Inverters: 2338,
    },
    {
      date: "Feb 23",
      SolarPanels: 2756,
      Inverters: 2103,
    },
    {
      date: "Mar 23",
      SolarPanels: 3322,
      Inverters: 2194,
    },
  ];
  return (
    <BarChart
      className="h-60"
      data={chartdata}
      index="date"
      categories={["SolarPanels", "Inverters"]}
      valueFormatter={(number) =>
        `${Intl.NumberFormat("us").format(number).toString()}`
      }
      onValueChange={(v) => console.log(v)}
    />
  );
};
export default BarChartHero;
