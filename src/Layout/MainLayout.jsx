import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const MainLayout = () => {
  return (
    <div className="pt-[82px] pb-[100px]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
