import React from "react";

import { GoHomeFill } from "react-icons/go";
const RecordsLog = () => {
  return (
    <div className="flex justify-between items-center bg-white rounded-md m-5 px-4 py-2">
      <div className="flex items-center justify-center gap-4 text-sm">
        <p className="bg-blue-600 rounded-full p-3">
          <GoHomeFill className="text-white text-xl" />
        </p>
        <div>
          <h1>Landing & Renting</h1>
          <p className="text-gray-500">3 hours</p>
        </div>
      </div>

      <h1 className="text-green-500">$34,000,000</h1>
    </div>
  );
};

export default RecordsLog;
