"use client";

import Header from "../components/header";
import Cards from "../components/cards";
import Graphic from "../components/graphic";
import RecordsLog from "../components/RecordsLog";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Dashboard = () => {
  return (
    <div className="bg-slate-100 pb-3">
      <Header />
      <Cards />
      <Graphic />
      <RecordsLog />
    </div>
  );
};

export default Dashboard;
