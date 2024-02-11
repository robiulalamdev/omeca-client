/* eslint-disable react/no-unescaped-entities */
import send from "../../assets/send.png";

const ChattingNext = () => {
  return (
    <div>
      <div className="h-[572px] flex flex-col justify-between gap-4 overflow-y-auto no_scrollbar">
        <div>
          <p className="text-[34px] font-bold text-primary mb-[25px]">
            What is your Goal?
          </p>
          <p className="text-[#202027] text-[18px] font-medium mb-[14px]">
            Describe what data is in your mind?
          </p>
          <p className="text-secondary bg-[#EFF3F7] rounded-[10px] my-3 p-5">
            "At Buraqlab, we're not just a pet care agency; we're devoted
            designers of well-being for your furry family members. Our
            commitment to thoughtful, holistic design ensures that every aspect
            of our services is crafted to create a nurturing and joyful
            environment for your pets. Choose Buraqlab for a unique blend of
            care and design expertise that elevates your pets' experience to a
            new level of comfort and happiness."
          </p>
          <p className="text-[#202027] text-[18px] font-medium mb-[14px]">
            Describe what data is in your mind?
          </p>

          <input
            className="bg-[#EFF3F7] rounded-[10px] px-4 py-3 flex items-center justify-between gap-4 w-full"
            type="text"
            placeholder="Type..."
          />
        </div>

        <div>
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

export default ChattingNext;
