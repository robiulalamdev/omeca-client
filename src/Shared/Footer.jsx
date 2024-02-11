import settings from "../assets/settings.png";
import linkedin from "../assets/linkedln.png";
import paypal from "../assets/paypal.png";
import facebook from "../assets/facebook.png";
import dribble from "../assets/dribbble.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";
import telegram from "../assets/telegram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialMedia = [
    {
      icon: linkedin,
      path: "/",
    },
    {
      icon: paypal,
      path: "/",
    },
    {
      icon: facebook,
      path: "/",
    },
    {
      icon: dribble,
      path: "/",
    },
    {
      icon: twitter,
      path: "/",
    },
    {
      icon: whatsapp,
      path: "/",
    },
    {
      icon: telegram,
      path: "/",
    },
  ];
  return (
    <div className="bg-[#D7DDE2] px-8 pt-5 pb-4 flex flex-wrap items-center gap-4 justify-center md:justify-between fixed w-full bottom-0">
      <button className="text-secondary hover:shadow-md hover:scale-95 transition-all duration-300 text-sm font-normal px-5 py-[10px] border border-secondary bg-white rounded-[40px] whitespace-nowrap">
        Join our community
      </button>
      <div className="flex items-center gap-3">
        {socialMedia.map((data, index) => (
          <Link
            className="hover:scale-110 transition-all duration-300"
            key={index}
            to={data.path}
          >
            <img src={data.icon} alt="" />
          </Link>
        ))}
      </div>
      <button className="flex flex-nowrap gap-[10px] items-center text-secondary hover:shadow-md hover:scale-95 transition-all duration-300  text-sm font-normal px-5 py-[10px] border border-secondary bg-white rounded-[40px]">
        <img src={settings} alt="" /> Settings
      </button>
    </div>
  );
};

export default Footer;
