"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [recordHistory, setRecordHistory] = useState(null);

  const fetchCategoriesData = async () => {
    try {
      const response = await axios.get("http://localhost:8008/categories");
      if (response.status === 200) {
        setCategory(response.data.category);
        console.log("Categories ирсэн дата харах", response.data.category);
      }
    } catch (error) {
      console.error(
        "Categories ийн датаагаа backend ээс авахад алдаа гарсан байна.",
        error
      );
    }
  };
  const getRecordHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:8008/records/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRecordHistory(res.data.historyData);
      console.log(
        "Back end ees record history iin dataa авч чадлаа",
        res.data.historyData
      );
    } catch (error) {
      console.log(
        "Back end ees  record history iin dataa авч чадсангүй ээ уйл",
        error
      );
    }
  };

  useEffect(() => {
    fetchCategoriesData();
    getRecordHistory();
  }, []);
  return (
    <DashboardContext.Provider
      value={{ category, fetchCategoriesData, getRecordHistory, recordHistory }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
export default DashboardProvider;
