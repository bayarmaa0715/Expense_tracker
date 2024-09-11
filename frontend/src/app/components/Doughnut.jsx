"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnurChart = () => {
  const [expData, setExpData] = useState();
  const fetchExpenseData = async () => {
    try {
      const token = localStorage.getItem("token");
      const eData = await axios.get(
        "http://localhost:8008/records/expenseChartInfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (eData.status === 200) {
        console.log(
          "Backend ээс ирсэн орлого зарлагын дата",
          eData.data?.eChartdata
        );
        setExpData(eData.data?.eChartdata);
      }
    } catch (error) {
      console.log(
        "Backend ээс ирсэн орлого зарлагын датаг авч садахгүй байна",
        error
      );
    }
  };
  const chartNum = expData?.map((data) => data.sum);
  const chartLebal = expData?.map((data) => data.name);

  useEffect(() => {
    fetchExpenseData();
  }, []);
  const data2 = {
    datasets: [
      {
        data: chartNum,

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: chartLebal,
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="flex items-center justify-center p-4 bg-white card ">
      <div className="h-96 w-96">
        <Doughnut options={options2} data={data2} />
        {/* {categoryData && <Doughnut options={options2} data={data2} />}
        {!categoryData && (
          <div className="flex items-center justify-center w-full h-full gap-4">
            <div className="w-24 h-24 rounded-full skeleton"></div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DoughnurChart;
