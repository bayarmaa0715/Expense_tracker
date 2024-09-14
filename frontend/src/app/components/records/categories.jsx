"use client";
import { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import Recordmodal from "../Recordmodal";
import CategoryModal from "../CategoryModal";
import { DashboardContext } from "@/app/context/dashboard-context";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const [catShowModal, setCatShowModal] = useState(false);
  const { category } = useContext(DashboardContext);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const catOpenModal = () => setCatShowModal(true);
  const catCloseModal = () => setCatShowModal(false);

  return (
    <div className="flex flex-col gap-6 w-1/4 m-6 p-4 bg-white rounded-lg">
      <h1 className="font-bold text-lg">Records</h1>
      <button className=" btn btn-primary" onClick={openModal}>
        +Add
      </button>
      <input type="search" placeholder="Search" className="px-2" />
      <h1 className="font-bold text-lg">Types</h1>
      <ul className="list-disc pl-6">
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start gap-10">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-green-500"
              defaultChecked
            />
            <span className="label-text">All</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start gap-10">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-green-500"
              defaultChecked
            />
            <span className="label-text ">Income</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer flex justify-start gap-10">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-green-500"
              defaultChecked
            />
            <span className="label-text">Expense</span>
          </label>
        </div>
      </ul>
      <h1 className="font-bold text-lg">Category</h1>
      <ul className="pl-3">
        {category?.map((c) => (
          <li className="flex items-center gap-2">
            {" "}
            <span>
              <IoEye />
            </span>
            {c.name}
          </li>
        ))}
      </ul>
      <div>
        <button className=" btn btn-ghost text-lg p-0" onClick={catOpenModal}>
          + Add category
        </button>
      </div>
      <Recordmodal showModal={showModal} hideModal={closeModal} />
      <CategoryModal catShowModal={catShowModal} closeModal={catCloseModal} />
    </div>
  );
};

export default Categories;
