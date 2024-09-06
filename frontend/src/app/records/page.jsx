import React from "react";
import Header from "../components/header";
import Categories from "../components/records/categories";
import RecordsLog from "../components/RecordsLog";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const Records = () => {
  return (
    <div className="bg-slate-100 pb-3">
      <Header />
      <div className="flex">
        <Categories />
        <div className="w-3/4 pt-5">
          <div className="flex justify-between items-center px-5">
            <div className="flex gap-2 items-center">
              <button className=" bg-gray-300 rounded-lg p-2">
                <FaAngleLeft />
              </button>
              <p>Last 30 days</p>
              <button className=" bg-gray-300 rounded-lg p-2">
                <FaAngleRight />
              </button>
            </div>
            <button className="bg-white rounded-lg px-7 py-2 ">
              Newest first
            </button>
          </div>
          <RecordsLog />
        </div>
      </div>
    </div>
  );
};

export default Records;
