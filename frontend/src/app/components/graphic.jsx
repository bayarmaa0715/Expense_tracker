import React from "react";
import { BarChartHero } from "./Barchart";

const Graphic = () => {
  return (
    <div className="flex gap-3 p-5">
      <div className="w-1/2 bg-white rounded-md p-5">
        <h1 className="border-b-[1px] pb-2  font-bold">Income-Expense</h1>
        <BarChartHero />
      </div>
      <div className="w-1/2 bg-white rounded-md p-5">
        <h1 className="border-b-[1px] pb-2  font-bold">Income-Expense</h1>
        <BarChartHero />
      </div>
    </div>
  );
};

export default Graphic;
