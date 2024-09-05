"use client";

import { BarChart } from "@tremor/react";

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

export const BarChartHero = () => (
  <BarChart
    className="h-80"
    data={chartdata}
    index="date"
    categories={["SolarPanels", "Inverters"]}
    valueFormatter={(number) =>
      `$${Intl.NumberFormat("us").format(number).toString()}`
    }
    onValueChange={(v) => console.log(v)}
  />
);
