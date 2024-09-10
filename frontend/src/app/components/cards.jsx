import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import axios from "axios";
const Cards = () => {
  const [getInfo, setGetInfo] = useState(null);

  const getRecordInfoCard = async () => {
    try {
      const res = await axios.get("http://localhost:8008/records/info");

      console.log("Records info back ees irsen", res.data);
      setGetInfo(res.data);
    } catch (error) {
      console.log("Records info татахад алдаа гарлаа");
    }
  };

  const balance = async () => {
    try {
      const res = await axios.get("http://localhost:8008/records/balance");
      console.log("Balance дансны үлдэгдэл", res.data);
    } catch (error) {
      console.log("Balance дансны үлдэгдэл татахад алдаа гарлаа");
    }
  };
  useEffect(() => {
    getRecordInfoCard();
    balance();
  }, []);
  const balanceAcc = getInfo?.income.sum - getInfo?.expense.sum;

  console.log("Too yu string uu", getInfo?.income.sum);
  return (
    <div className="flex gap-3 p-5">
      <div className="w-1/3 flex flex-col gap-9 p-6  rounded-md bg-gradient-to-b from-green-500 via-blue-500 to-pink-500">
        <img src="/images/logo.png" alt="" className="w-20 h-10" />
        <div>
          <h1>Cash</h1>
          <p>${balanceAcc}</p>
        </div>
      </div>
      <div className="w-1/3 bg-white flex flex-col gap-4 p-6  rounded-md">
        <div className="flex gap-1 items-center border-b-[1px] pb-2 ">
          <GoDotFill className="text-green-500" />
          <h1 className="font-bold">Your income</h1>
        </div>
        <div>
          <p className="text-2xl">${getInfo?.income.sum}</p>
          <h1>Your income amount</h1>
        </div>
        <div className="flex gap-1 items-center">
          <FaArrowCircleUp className="text-green-500" />
          <h1>32% from last month</h1>
        </div>
      </div>

      <div className="w-1/3 bg-white flex flex-col gap-4 p-6  rounded-md">
        <div className="flex gap-1 items-center border-b-[1px] pb-2 ">
          <GoDotFill className="text-blue-500" />
          <h1 className="font-bold">Total Expenses</h1>
        </div>
        <div>
          <p className="text-2xl">${getInfo?.expense.sum}</p>
          <h1>Your expence amount</h1>
        </div>
        <div className="flex gap-1 items-center">
          <FaArrowCircleDown className="text-blue-500" />
          <h1>32% from last month</h1>
        </div>
      </div>
    </div>
  );
};

export default Cards;
