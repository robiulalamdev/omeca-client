import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Sidebar from "../Shared/Sidebar";

const DashboardLayout = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div>
      <Header />
      <div className="absolute mt-[50px] top-[30px] left-[20px]">
        <button className="block xl:hidden" onClick={handleSidebar}>
          <IoReorderThreeOutline className="text-2xl" />
        </button>
      </div>
      <div
        className={`xl:flex justify-between h-full md:pt-[82px] pb-[100px] w-full`}
      >
        <Sidebar handleSidebar={handleSidebar} sidebar={sidebar} />
        <div className="overflow-y-auto w-full h-[100vh] flex-grow !relative">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
