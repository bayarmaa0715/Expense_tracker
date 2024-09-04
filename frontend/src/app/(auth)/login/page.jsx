"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const logIn = async () => {
    const { email, password } = userData;
    const response = await axios.post("http://localhost:8008/auth/signin", {
      email: email,
      password: password,
    });

    console.log("data", response.data);
  };

  return (
    <div className="bg-blue-600">
      <div className="bg-white flex flex-col gap-3 w-1/2">
        <img src="/images/logo.png" alt="" width="100px" />
        <h1>Welcome Back</h1>
        <p>Welcome back, Please enter your details</p>
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          onChange={(event) => {
            return setUserData({ ...userData, email: event.target.value });
          }}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
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
      {/* <div className="w-1/2"></div> */}
    </div>
  );
};

export default SignIn;
