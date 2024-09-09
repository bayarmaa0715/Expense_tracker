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

  const [image, setImage] = useState(null);
  const handleImageUpload = async () => {
    if (!image) return;
    const formData = new FormdData();
    formData.append(file, image);
    formData.append("upload_preset", "byurziwm");
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

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
      <div className="w1/2 bg-blue-700"></div>
      <div className="flex flex-col gap-3 bg-white w-1/2">
        <img src="/images/logo.png" alt="" width="100px" />
        <h1>Welcome Back</h1>
        <p>Welcome back, Please enter your details</p>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            return setUserData({ ...userData, name: e.target.value });
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            return setUserData({ ...userData, email: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            return setUserData({ ...userData, password: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Re-password"
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
  );
};

export default SignUp;
