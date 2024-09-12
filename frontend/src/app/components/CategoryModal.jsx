"use client";
import React from "react";

const CategoryModal = ({ catShowModal, closeModal }) => {
  return (
    <dialog
      id="my_modal_3"
      open={catShowModal}
      onClose={closeModal}
      className="modal"
    >
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Add category</h3>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 w-full ">
            <select name="" id="" className="w-1/3 px-5 py-2 border rounded-md">
              <option value="" disabled selected></option>
              <option value="">Зурөг1 </option>
            </select>
            <input
              type="text"
              placeholder="Category name "
              className="w-2/3 px-5 py-2 border rounded-md"
            />
          </div>

          <button className="btn btn-success rounded-full"> Add</button>
        </div>
      </div>
    </dialog>
  );
};

export default CategoryModal;
