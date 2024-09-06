import React from "react";
import { IoEye } from "react-icons/io5";
const Categories = () => {
  return (
    <div className="flex flex-col gap-6 w-1/4 m-6 p-4 bg-white rounded-lg">
      <h1 className="font-bold text-lg">Records</h1>
      <button className=" btn btn-primary">+Add</button>
      <input type="search" placeholder="Search" className="px-2" />
      <h1 className="font-bold text-lg">Types</h1>
      <ul className="list-disc pl-6">
        <li>All</li>
        <li>Income</li>
        <li>Expense</li>
      </ul>
      <h1 className="font-bold text-lg">Category</h1>
      <ul className="pl-3">
        <li className="flex items-center gap-2">
          {" "}
          <span>
            <IoEye />
          </span>{" "}
          Food & Drinks
        </li>
      </ul>
      <div>
        <button className=" btn btn-ghost text-lg p-0">+ Add category</button>
      </div>
    </div>
  );
};

export default Categories;
