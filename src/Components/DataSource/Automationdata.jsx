import ai from "../../assets/ai.png";
import bot from "../../assets/bot.png";
import human from "../../assets/human.png";
import api from "../../assets/api.png";
import { useState } from "react";

const Automationdata = () => {
  const [active, setActive] = useState(null);
  const details = [
    {
      pic: ai,
      title: "Ai",
      amount: 25,
    },
    {
      pic: bot,
      title: "Bot",
      amount: 25,
    },
    {
      pic: human,
      title: "Human",
      amount: 40,
    },
    {
      pic: api,
      title: "API",
      amount: 20,
    },
  ];

  const handleCardClick = (index) => {
    setActive(index === active ? null : index);
  };
  return (
    <div>
      <p className="text-[34px] font-bold text-primary mb-[25px]">
        Automation Data
      </p>
      <p className="text-[18px] font-medium text-[#202027] mb-[29px]">
        Assign a percentage to each one of these for data automation?
      </p>
      <div className="grid grid-cols-3 gap-[14px]">
        {details.map((data, index) => (
          <div
            className={`shadow-prompts border ${
              index === active ? "border-royalBlue" : "border-transparent"
            } hover:border-royalBlue transition-all duration-300  rounded-[10px] p-5 flex flex-col justify-center items-center w-full`}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <img className="mb-2" src={data.pic} alt="" />
            <p className="text-[18px] font-normal">
              <span className="text-royalBlue  font-bold">{data.amount}</span>{" "}
              {data.title}{" "}
            </p>
          </div>
        ))}
      </div>

      <div className="pub_btn text-end">
        <button
          className="py-4 w-[170px] inline-block bg-[#1765FC] rounded-[60px] text-center text-base font-medium text-white border hover:bg-white hover:border-[#1765FC] hover:text-[#1765FC]
         transition-all duration-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Automationdata;
