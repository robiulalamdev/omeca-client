/* eslint-disable react/no-unescaped-entities */
import chatting from "../../assets/chatting.png";
import send from "../../assets/send.png";
import dropdown from "../../assets/dropdown.png";
import { useState } from "react";

const Chatting = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div>
      <div className="h-[572px] flex flex-col md:justify-between gap-4 overflow-y-auto no_scrollbar">
        <div className="flex flex-col items-center justify-center">
          <img className="mb-[6px]" src={chatting} alt="" />
          <p className="text-[34px] font-bold text-primary mb-[25px]">
            What is your Goal?
          </p>
        </div>

        <div>
          <div className="flex flex-col gap-3 mb-4">
            {[1, 2, 3].map((index) => (
              <div key={index}>
                <div
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="bg-[#EFF3F7] rounded-[10px] px-4 py-3 flex items-center justify-between gap-4">
                  <p className="text-secondary">
                    Describe what data is in your mind?
                  </p>
                  <img src={dropdown} alt="" />
                </div>
                {openIndex === index && (
                  <div className="text-secondary bg-[#EFF3F7] rounded-[10px] my-3 p-5">
                    <p>
                      "At Buraqlab, we're not just a pet care agency; we're
                      devoted designers of well-being for your furry family
                      members. Our commitment to thoughtful, holistic design
                      ensures that every aspect of our services is crafted to
                      create a nurturing and joyful environment for your pets.
                      Choose Buraqlab for a unique blend of care and design
                      expertise that elevates your pets' experience to a new
                      level of comfort and happiness."
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-secondary text-sm font-normal mb-4">
            What is your Goal?
          </p>
          <form className="flex items-center w-full gap-3 border border-secondary px-4 py-3 rounded-[10px]">
            <input
              className="w-full"
              type="text"
              placeholder="Describe what data is in your GOAL?"
            />
            <button>
              <img src={send} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
