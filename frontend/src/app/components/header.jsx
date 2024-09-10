"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { UserContext } from "../context/user-context";
import { useRouter } from "next/navigation";
import Modal from "./modal";

const Header = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(UserContext);
  const signOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex justify-between px-5 py-3 bg-white">
      <div className="flex gap-4  items-center">
        {" "}
        <img src="/images/logo.png" alt="" className="w-32 h-12" />
        <Link href="/dashboard" className="font-bold text-xl text-blue-700">
          Dashbaord
        </Link>
        <Link href="/records" className="font-bold text-xl text-blue-700">
          Records
        </Link>
      </div>
      <div className="flex gap-4">
        <div>
          <button className="btn btn-primary " onClick={openModal}>
            +Records
          </button>
        </div>

        <div className="flex justify-center items-center gap-4 ">
          <div>
            <img
              src={user?.profile_img}
              alt="Зураг"
              className="rounded-full w-12 h-12 "
            />
          </div>
          <div className="">
            <p className="mb-1">{user?.name}</p>
            <p className="text-[#6B7280]">{user?.createdat}</p>
          </div>
        </div>
        <div>
          <button className="btn btn-primary" onClick={signOut}>
            Sign out
          </button>
        </div>
      </div>
      <Modal showModal={showModal} hideModal={closeModal} />
    </div>
  );
};

export default Header;
