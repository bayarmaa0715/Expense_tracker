"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:8008/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data.user);
        console.log("ирсэн дата харах", response);
      }
    } catch (error) {
      console.error(
        "User ийн датаагаа backend ээс авахад алдаа гарсан байна.",
        error
      );
    }
  };
  useEffect(() => {
    if (!user) {
    }
    fetchUserData();
  }, [user]);
  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
