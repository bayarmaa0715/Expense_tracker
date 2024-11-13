"use client";
import { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import Recordmodal from "../Recordmodal";
import CategoryModal from "../CategoryModal";
import { DashboardContext } from "@/app/context/dashboard-context";
import { toast } from "react-toastify";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const [delCat, setDelCat] = useState();

  const { category, fetchCategoriesData } = useContext(DashboardContext);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [catShowModal, setCatShowModal] = useState(false);
  const catOpenModal = () => setCatShowModal(true);
  const catCloseModal = () => setCatShowModal(false);

  const [newCat, setNewCat] = useState();
  const addCategory = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:8008/categories",

        {
          name: newCat,
          description: "New cat",
          category_img:
            "https://cdn.vectorstock.com/i/1000v/02/06/eye-icon-on-white-background-vector-27400206.jpg",
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        setCatShowModal(false);
        await fetchCategoriesData();
        toast.success("Category амжилттай нэмлээ");
      }
    } catch (error) {
      toast.error("Category нэмэхэд алдаа гарлаа");
    }
  };

  const deleteCategory = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8008/categories/${delCat}`
      );
      if (res.status === 200) {
        await fetchCategoriesData();
        toast.success("Category амжилттай ustgalaa");
      }
    } catch (error) {
      console.error("Category usgtahad алдаа гарлаа");
    }
  };

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
        {category?.map((c, i) => (
          <li key={i} className="flex items-center justify-between gap-2">
            {" "}
            <p className="flex gap-2">
              <button>
                <IoEye />
              </button>
              {c.name}
            </p>
            <button
              onClick={() => {
                setDelCat(c.id), deleteCategory();
              }}
            >
              {" "}
              <MdDeleteForever />
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button className=" btn btn-ghost text-lg p-0" onClick={catOpenModal}>
          + Add category
        </button>
      </div>
      <Recordmodal
        showModal={showModal}
        hideModal={closeModal}
        setShowModal={setShowModal}
      />
      <CategoryModal
        catShowModal={catShowModal}
        closeModal={catCloseModal}
        addCategory={addCategory}
        setNewCat={setNewCat}
      />
    </div>
  );
};

export default Categories;
