"use client";

import Header from "../components/header";
import Cards from "../components/cards";
import Graphic from "../components/graphic";
import RecordsLog from "../components/RecordsLog";

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
