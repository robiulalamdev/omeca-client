/* eslint-disable react/prop-types */
import plus from "../../assets/add-circle.png";

const Buttons = ({ active }) => {
    return (
        <>
            <div className="flex justify-center  ">
                <div className=" flex justify-between max-w-[600px] w-full items-center  ">
                    <button className="bg-[#1765FC] rounded-[40px] lg:py-[17px] py-[10px]  px-[40px] lg:px-[60px] hover:bg-white hover:border-[#1765FC] hover:text-[#1765FC] transition-all duration-300 text-white text-base font-medium ">Upload CSV</button>
                    <button className="bg-white rounded-[40px] lg:py-[17px] py-[10px] justify-center border  w-[146px] hover:border hover:border-[#1765FC] transition-all duration-300  text-[#1765FC] text-base font-medium flex gap-[10px] items-center "> {!active &&<img src={plus} alt="" />} {active ? "FINISH" : "Add more"}</button>
                </div>
            </div>

        </>
    );
};

export default Buttons;
