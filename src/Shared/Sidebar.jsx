/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import data from "../assets/data.png";
import deploy from "../assets/deploy.png";
import goal from "../assets/goal.png";
import plan from "../assets/plan.png";
import sound from "../assets/sound.png";

const Sidebar = ({ handleSidebar, sidebar }) => {
  const location = useLocation();
  const navLinks = [
    {
      pic: goal,
      title: "Goal",
      path: "/prompts/goal",
    },
    {
      pic: data,
      title: "Data Sources",
      path: "/prompts/data-source",
    },
    {
      pic: plan,
      title: "Plan",
      path: "/prompts/plan",
    },
    {
      pic: sound,
      title: "Assigned project lead",
      path: "/prompts/project-lead",
    },
    {
      pic: deploy,
      title: "Deploy",
      path: "/prompts/deploy",
    },
  ];
  return (
    <>
      <div
        className={`flex-shrink-0 text-sm w-[221px] bg-white pt-[33px] fixed left-0 h-[100vh] px-5 ${
          sidebar ? "block" : "hidden"
        } xl:block z-10 xl:z-0`}>
        <div className="flex justify-between items-center mb-4">
          <p className="p-[6px]  text-[#0D0D0E] font-bold">Home </p>
          <div
            className="block xl:hidden cursor-pointer"
            onClick={handleSidebar}>
            <IoMdClose />
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          {navLinks.map((item, index) => (
            <Link
              className={`${
                location.pathname === item.path && "bg-[#EFF3F7]"
              } flex items-center gap-[10px] p-[6px] text-secondary hover:bg-[#EFF3F7] rounded-[4px]`}
              key={index}
              to={item.path}>
              <img src={item.pic} alt="" /> {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
