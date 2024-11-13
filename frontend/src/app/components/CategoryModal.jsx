"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CategoryModal = ({
  catShowModal,
  closeModal,
  setNewCat,
  addCategory,
}) => {
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
          <input
            type="text"
            placeholder="Category name "
            className="w-full px-5 py-2 border rounded-md"
            onChange={(e) => setNewCat(e.target.value)}
          />

          <button
            onClick={addCategory}
            className="btn btn-success rounded-full"
          >
            {" "}
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default CategoryModal;
