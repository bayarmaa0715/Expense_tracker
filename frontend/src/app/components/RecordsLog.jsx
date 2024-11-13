"use client";
import React, { useContext, useState } from "react";

import { GoHomeFill } from "react-icons/go";
import { DashboardContext } from "../context/dashboard-context";
import { format } from "date-fns";
import { TiDelete } from "react-icons/ti";
import CategoryModal from "./Del-Modal";
import axios from "axios";
import { toast } from "react-toastify";

const RecordsLog = () => {
  const [delRec, setDelRec] = useState();
  const { recordHistory, getRecordHistory } = useContext(DashboardContext);
  const [showDmodal, setShowDmodal] = useState(false);
  const show = () => setShowDmodal(true);
  const hide = () => setShowDmodal(false);

  const delRecord = async () => {
    try {
      const res = await axios.delete(`http://localhost:8008/records/${delRec}`);
      if (res.status === 200) {
        await getRecordHistory();
        toast.success("Record амжилттай ustgalaa");
      }
    } catch (error) {
      console.error("Record usgtahad алдаа гарлаа");
    }
  };

  return (
    <div>
      {recordHistory?.map((recordHistory, i) => (
        <div
          key={i}
          className="flex justify-between items-center bg-white rounded-md m-5 px-4 py-2"
        >
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

          <div className="flex gap-5">
            <h1
              className={`${
                recordHistory.transaction_type === "EXP"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {recordHistory?.amount}
            </h1>
            <button
              onClick={() => {
                setDelRec(recordHistory?.id);
                delRecord();
              }}
            >
              <TiDelete className="text-blue-600 text-2xl" />
            </button>
          </div>
        </div>
      ))}
      <CategoryModal
        catShowModal={show}
        closeModal={hide}
        delRecord={delRecord}
      />
    </div>
  );
};

export default RecordsLog;
