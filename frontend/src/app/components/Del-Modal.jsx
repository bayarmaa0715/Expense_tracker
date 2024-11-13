"use client";
import React from "react";

const DeleteModal = ({ show, hide, delRecord }) => {
  return (
    <dialog id="my_modal_3" open={show} onClose={hide} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-center text-lg ">Ta record устгах уу?</h3>
        <div className="flex justify-center gap-5">
          <button onClick={hide} className="btn px-10 py-1 rounded-full">
            {" "}
            Буцах
          </button>

          <button
            onClick={delRecord}
            className="btn button-red-100 px-10 py-1  rounded-full"
          >
            {" "}
            Устгах
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteModal;
