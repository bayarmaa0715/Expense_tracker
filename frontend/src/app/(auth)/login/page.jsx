"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { toast } from "react-toastify";

const SignIn = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const logIn = async () => {
    try {
      const { email, password } = userData;
      const response = await axios.post("http://localhost:8008/auth/signin", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        toast.success("Амжиттай нэвтэрлээ", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Нууц үг эсвэл имэйл буруу байна. Дахин оролдоно уу.", {
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="bg-blue-600  h-screen">
      <div className="bg-white w-1/2 h-screen flex justify-center">
        <div className=" flex flex-col justify-center text-center gap-3 ">
          <div className="flex justify-center">
            {" "}
            <img src="/images/logo.png" alt="" width="100px" />
          </div>

          <h1>Welcome Back</h1>
          <p>Welcome back, Please enter your details</p>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="border rounded-md px-6 py-1"
            onChange={(event) => {
              return setUserData({ ...userData, email: event.target.value });
            }}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="border rounded-md px-6 py-1"
            onChange={(event) => {
              return setUserData({ ...userData, password: event.target.value });
            }}
          />
          <button className="btn btn-primary" onClick={logIn}>
            Log in
          </button>
          <p>
            Don't have acount?
            <Link href="/signup" className="text-blue-500">
              SignUp
            </Link>{" "}
          </p>
        </div>
      </div>
      {/* <div className="w-1/2"></div> */}
    </div>
  );
};

export default SignIn;
