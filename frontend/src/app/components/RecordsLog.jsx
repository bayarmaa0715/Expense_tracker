"use client";
import React, { useContext } from "react";

import { GoHomeFill } from "react-icons/go";
import { DashboardContext } from "../context/dashboard-context";
import { format } from "date-fns";
const RecordsLog = () => {
  // const date = Date();
  // console.log("today", date);
  const { recordHistory } = useContext(DashboardContext);
  return (
    <div>
      {recordHistory?.map((recordHistory) => (
        <div className="flex justify-between items-center bg-white rounded-md m-5 px-4 py-2">
          <div className="flex items-center justify-center gap-4 text-sm">
            <p className="bg-blue-600 rounded-full p-3">
              <GoHomeFill className="text-white text-xl" />
            </p>
            <div>
              <h1>{recordHistory?.name}</h1>
              <p className="text-gray-500">
                {format(recordHistory?.createdat, "yyyy-MM-dd HH:mm")}
              </p>
            </div>
          </div>

          <h1
            className={`${
              recordHistory.transaction_type === "EXP"
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {recordHistory?.amount}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default RecordsLog;
