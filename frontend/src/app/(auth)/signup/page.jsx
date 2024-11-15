"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const signUp = async () => {
    const { name, email, password, repassword } = userData;

    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо таарахгүй байна.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8008/auth/signup", {
        name,
        email,
        password,
      });
      if (response.status === 404) {
        toast.success("Хэрэглэгч бүртгэлтэй байна");
        router.push("/login");
      }

      if (response.status === 200) {
        toast.success("Амжилттай бүртгэлээ");
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Нэвтрэхэд алдаа гарлаа");
    }
  };

  return (
    <div className="bg-blue-600">
      <div className="bg-white w-1/2 h-screen flex justify-center ">
        <div className=" flex flex-col justify-center text-center gap-3">
          <div className="flex justify-center">
            {" "}
            <img src="/images/logo.png" alt="" width="100px" />
          </div>

          <h1>Welcome Back</h1>
          <p>Welcome back, Please enter your details</p>
          <input
            type="text"
            placeholder="Name"
            className="border rounded-md px-6 py-1"
            onChange={(e) => {
              return setUserData({ ...userData, name: e.target.value });
            }}
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md px-6 py-1"
            onChange={(e) => {
              return setUserData({ ...userData, email: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-md px-6 py-1"
            onChange={(e) => {
              return setUserData({ ...userData, password: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Re-password"
            className="border rounded-md px-6 py-1"
            onChange={(e) => {
              return setUserData({ ...userData, repassword: e.target.value });
            }}
          />
          <button className="btn btn-primary" onClick={signUp}>
            Sign up
          </button>
          <p>
            Already have account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
