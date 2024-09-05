import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between p-5">
    <div className="flex gap-4  items-center">
      {" "}
      <img src="/images/logo.png" alt="" className="w-32 h-12" />
      <h1 className="font-bold text-xl text-blue-700">Dashbaord</h1>
    </div>
    <div className="flex gap-4">
      <div>
        <button className="btn btn-primary ">+Records</button>
      </div>
      <div className="flex justify-center items-center gap-4 ">
        <div>
          <img
            src="/images/img.jpeg"
            alt="income"
            className="rounded-full w-12 h-12 "
          />
        </div>
        <div className="">
          <p className="mb-1">Name</p>
          <p className="text-[#6B7280]">2024.09.05</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header