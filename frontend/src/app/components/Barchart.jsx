"use client";

import { BarChart } from "@tremor/react";
import axios from "axios";
import { useEffect, useState } from "react";

const BarChartHero = () => {
  const [barData, setBarData] = useState();
  const getBarChartInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:8008/records/barChartInfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBarData(res.data.barData);
      console.log("Back end ees barchart iin dataa авч чадлаа", barData);
    } catch (error) {
      console.log(
        "Back end ees barchart iin dataa авч чадсангүй ээ уйл",
        error
      );
    }
  };
  useEffect(() => {
    getBarChartInfo();
  }, []);

  console.log("BD=======>", barData);

  return (
    <BarChart
      className="h-60"
      data={barData}
      index="date"
      categories={["Зардал", "Орлого"]}
      valueFormatter={(number) =>
        `${Intl.NumberFormat("us").format(number).toString(",000")}`
      }
      onValueChange={(v) => console.log(v)}
    />
  );
};
export default BarChartHero;
