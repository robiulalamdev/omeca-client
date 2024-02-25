import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import arrow from "../assets/arrow-down.png";
import domainActive from "../assets/domain-active.png";
import domain from "../assets/domain.png";
import gifActive from "../assets/gif-active.png";
import gif from "../assets/gif.png";
import globe from "../assets/global.png";
import homeActive from "../assets/home-active.png";
import home from "../assets/home.png";
import logo from "../assets/logo.png";
import moon from "../assets/moon.png";
import notification from "../assets/notification.png";
import promptsActive from "../assets/prompt-active.png";
import prompts from "../assets/propmts.png";
import sun from "../assets/sun.png";

const Header = () => {
  const [mood, setMood] = useState("light");
  const [lng, setLng] = useState("En");
  const [open, setOpen] = useState(false);

  const [toggle, setToggle] = useState(false);

  const responsiveToggle = () => {
    setToggle(!toggle);
  };

  const location = useLocation();

  const navlinks = [
    {
      pic: home,
      active: homeActive,
      title: "Home",
      path: "/",
    },
    {
      pic: domain,
      active: domainActive,
      title: "Domain",
      path: "/domain",
    },
    {
      pic: prompts,
      active: promptsActive,
      title: "Prompts",
      path: "/prompts/goal",
    },
    {
      pic: gif,
      active: gifActive,
      title: "GIF",
      path: "/gif",
    },
    {
      pic: notification,
      active: notification,
      title: "Notification",
      path: "/notification",
    },
  ];
  return (
    <div className="px-8 pt-[23px] pb-3 shadow-prompts bg-white fixed top-0 w-full !z-[999999999999999]">
      <div className="hidden md:flex flex-wrap justify-between gap-5 items-center">
        <div className="md:flex md:flex-shrink-0 items-center gap-[33px]">
          <div>
            <Link to="/" className="inline-block">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="flex flex-wrap md:flex-nowrap gap-5 md:gap-0">
            {navlinks.map((data, index) => (
              <Link
                to={data.path}
                key={index}
                className={`${
                  location.pathname.includes("/prompts") &&
                  data.path.includes("/prompts")
                    ? "active"
                    : location.pathname === data.path && "active"
                }  text-secondary flex-shrink-0 w-[65px] flex flex-col justify-center items-center text-center `}
              >
                <img
                  className="object-contain mb-[6px]"
                  src={location.pathname === data.path ? data.active : data.pic}
                  alt=""
                />
                <p className=" text-xs text-medium">{data.title}</p>
              </Link>
            ))}
          </div>

          <button className="faq_btn">FAQ</button>
        </div>

        <div className="flex items-center gap-[18px]">
          <button className="bg-royalBlue rounded-[50px] py-[13px] px-[26px] text-white text-sm font-medium hover:bg-transparent hover:text-royalBlue border border-transparent hover:border-royalBlue transition-all duration-300">
            Ask Questions?
          </button>
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="border border-[#EFF3F7] rounded-[50px] px-[9px] py-[10px] flex items-center gap-2 text-secondary text-sm font-normal "
            >
              <img src={globe} alt="" />
              {lng}
              <img src={arrow} alt="" />
            </button>
            {open && (
              <div className="shadow-prompts bg-white rounded-3 p-3 text-sm text-secondary text-center absolute w-full">
                <p
                  onClick={() => {
                    setLng("En");
                    setOpen(false);
                  }}
                  className="mb-2"
                >
                  En
                </p>
                <p
                  onClick={() => {
                    setLng("Ca");
                    setOpen(false);
                  }}
                >
                  Ca
                </p>
              </div>
            )}
          </div>
          <button className="bg-[#EFF3F7] p-[2px] rounded-[50px] flex items-center">
            <img
              onClick={() => setMood("light")}
              className={`${
                mood === "light" ? "bg-white" : "bg-transparent"
              }  rounded-full p-2`}
              src={sun}
              alt=""
            />
            <img
              onClick={() => setMood("dark")}
              className={`${
                mood === "dark" ? "bg-white" : "bg-transparent"
              }  rounded-full p-2`}
              src={moon}
              alt=""
            />
          </button>
        </div>
      </div>
      {/* responsive btn */}
      <div className="responsive_btn md:hidden ml-auto">
        <div className="flex justify-between">
          <Link to="/" className="inline-block">
            <img src={logo} alt="" />
          </Link>

          <button onClick={responsiveToggle}>
            <CiMenuBurger />
          </button>
        </div>

        <div className={toggle ? "block" : "navbar mx-auto hidden"}>
          <div>
            <div className="mt-5">
              <div className="w-full">
                {navlinks.map((data, index) => (
                  <Link
                    key={index}
                    to={data.path}
                    className={`${
                      location.pathname === data.path && "active"
                    }" text-secondary flex-shrink-0 w-full flex gap-2 py-2 justify-center items-center text-center"`}
                  >
                    <img
                      className="object-contain mb-[6px]"
                      src={
                        location.pathname === data.path ? data.active : data.pic
                      }
                      alt=""
                    />
                    <p className=" text-xs text-medium">{data.title}</p>
                  </Link>
                ))}
              </div>

              <div className="flex justify-center my-4">
                <button className="faq_btn">FAQ</button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-[18px]">
              <button className="bg-royalBlue hover:bg-transparent hover:text-royalBlue border border-transparent hover:border-royalBlue transition-all duration-300 rounded-[50px] py-[13px] px-[26px] text-white text-sm font-medium">
                Ask Questions?
              </button>

              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="border border-[#EFF3F7] rounded-[50px] px-[9px] py-[10px] flex items-center gap-2 text-secondary text-sm font-normal "
                >
                  <img src={globe} alt="" />
                  {lng}
                  <img src={arrow} alt="" />
                </button>
                {open && (
                  <div className="shadow-prompts bg-white rounded-3 p-3 text-sm text-secondary text-center absolute w-full">
                    <p
                      onClick={() => {
                        setLng("En");
                        setOpen(false);
                      }}
                      className="mb-2"
                    >
                      En
                    </p>
                    <p
                      onClick={() => {
                        setLng("Ca");
                        setOpen(false);
                      }}
                    >
                      Ca
                    </p>
                  </div>
                )}
              </div>
              <button className="bg-[#EFF3F7] p-[2px] rounded-[50px] flex items-center">
                <img
                  onClick={() => setMood("light")}
                  className={`${
                    mood === "light" ? "bg-white" : "bg-transparent"
                  }  rounded-full p-2`}
                  src={sun}
                  alt=""
                />
                <img
                  onClick={() => setMood("dark")}
                  className={`${
                    mood === "dark" ? "bg-white" : "bg-transparent"
                  }  rounded-full p-2`}
                  src={moon}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
