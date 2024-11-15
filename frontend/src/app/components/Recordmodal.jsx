"use client";

import { useContext, useState } from "react";
import { DashboardContext } from "../context/dashboard-context";
import axios from "axios";
import { toast } from "react-toastify";

const Recordmodal = ({ showModal, hideModal, setShowModal }) => {
  const { category } = useContext(DashboardContext);
  const [active, setActive] = useState("EXP");
  const [recordFormData, setRecordFormData] = useState({
    name: "",
    amount: 0,
    cid: "",
    description: "",
  });

  const handleChangeForm = (event) => {
    setRecordFormData({
      ...recordFormData,
      [event.target.name]: event.target.value,
    });
  };

  const addRecordData = async () => {
    const newData = { ...recordFormData, transaction_type: active };
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:8008/records", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        hideModal();
        toast.success("Record амжилттай нэмлээ");
      }
    } catch (error) {
      console.log("first", error);
      toast.error("Record нэмэхэд алдаа гарлаа");
    }
  };

  return (
    <dialog open={showModal} onClose={hideModal} className="modal">
      <div className="modal-box max-w-2xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg border-b-2">Add record</h3>
        <div className=" flex gap-5 mt-5 w-full">
          <div className="flex flex-col gap-4 w-1/2 ">
            <div className="flex bg-gray-100 rounded-full justify-between">
              <button
                className="focus:bg-blue-500 rounded-full px-12 py-2"
                onClick={() => setActive("EXP")}
              >
                Expense
              </button>
              <button
                className="focus:bg-green-500 focus:text-white rounded-full px-12 py-2"
                onClick={() => setActive("INC")}
              >
                Income
              </button>
            </div>
            <div className="">
              <p>Name</p>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
                name="name"
                onChange={handleChangeForm}
              />
            </div>
            <div className="">
              <p>Amount</p>
              <input
                type="number"
                placeholder="$ 000.0"
                className="input input-bordered w-full"
                name="amount"
                onChange={handleChangeForm}
              />
            </div>
            <div>
              <p>Category</p>
              <select
                className="border rounded-md px-3 py-3 w-full "
                name="cid"
                onChange={handleChangeForm}
              >
                <option>Choose</option>
                {category?.map((c, i) => {
                  return (
                    <option key={i} value={c.id}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex gap-2">
              <div>
                <p>Date</p>
                <input type="date" className="input input-bordered" />
              </div>
              <div>
                <p>Time</p>
                <input type="time" className="input input-bordered" />
              </div>
            </div>
            <button
              className={`btn ${
                active === "EXP" ? "btn-primary" : "btn bg-success text-white"
              } `}
              onClick={addRecordData}
            >
              Add record
            </button>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <p>Payee</p>
            <input
              type="text"
              placeholder="Write here"
              className="input input-bordered w-full"
            />
            <p>Note</p>
            <input
              type="text"
              placeholder="Write here"
              className="input input-bordered w-full h-3/4"
            />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Recordmodal;
