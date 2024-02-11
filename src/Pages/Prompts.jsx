// import ai from "../assets/ai.svg";
// import bot from "../assets/bot1.png";
// import human from "../assets/user.png";
// import api from "../assets/api1.png";
// import { useState } from "react";
// import WorkFlowHeader from "../Components/Prompts/WorkFlowHeader";
// import AiWorkingData from "../Components/Prompts/AiWorkingData";

// const Prompts = () => {
//     const [workFlow, setWorkFlow] = useState(false);

//     const [active, setActive] = useState(false);

//     const handleActive = () => {
//         setActive(!active);
//     };

//     const handleWorkFlow = () => {
//         setWorkFlow(!workFlow);
//     };

//     return (
//         <div className="ml-[221px]">

//             <div className="grid grid-cols-12 w-[100%] me-[31px]">
//                 <div className="lg:col-span-9 col-span-12">
//                     <div className="flex flex-col m-auto mt-[115px]">
//                         <WorkFlowHeader handleWorkFlow={handleWorkFlow} />

//                         {workFlow && (
//                             <div className="m-auto shadow-prompts h-[91px] bg-white rounded-[5px] p-[6px]  mb-[20px]">
//                                 <div className="flex items-center gap-[2px]">
//                                     <div
//                                         onClick={handleActive}
//                                         className={`${active
//                                                 ? "border-[#1865FC] border  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] pb-[8px] shadow-prompts text-center  cursor-pointer "
//                                                 : "border border-white  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] pb-[8px] shadow-prompts text-center  cursor-pointer"
//                                             }`}
//                                     >
//                                         <img
//                                             className="w-[30px] h-[30px] mb-[8px]"
//                                             src={ai}
//                                             alt="ai"
//                                         />
//                                         <p className="text-[#202027] text-sm  font-normal">AI</p>
//                                     </div>

//                                     <div className=" border border-white  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] pb-[8px] shadow-prompts text-center cursor-pointer">
//                                         <img
//                                             className="w-[30px] h-[30px] mb-[8px]"
//                                             src={bot}
//                                             alt="ai"
//                                         />
//                                         <p className="text-[#202027] text-sm  font-normal">Bot</p>
//                                     </div>
//                                     <div className=" border border-white  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] pb-[8px] shadow-prompts flex flex-col  cursor-pointer items-center">
//                                         <img
//                                             className="w-[30px] h-[30px] mb-[8px]"
//                                             src={human}
//                                             alt="ai"
//                                         />
//                                         <p className="text-[#202027] text-sm  font-normal">Human</p>
//                                     </div>
//                                     <div className=" border border-white  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] pb-[8px] shadow-prompts text-center cursor-pointer">
//                                         <img
//                                             className="w-[30px] h-[30px] mb-[8px]"
//                                             src={api}
//                                             alt="ai"
//                                         />
//                                         <p className="text-[#202027] text-sm  font-normal">API</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         {active && <AiWorkingData />}

//                     </div>
//                 </div>
//                 <div className="lg:col-span-3 col-span-12 flex justify-end  ">
//                     <div className="bg-white rounded-[6px] mt-[70px] pt-[25px] ps-[19px] pe-[13px] h-[810px] w-[100%] lg:max-w-[292px] ">
//                         <h3 className="text-lg font-medium text-[#202027]  mb-[20px] ">
//                             Examples
//                         </h3>
//                         <div className="py-[15px] px-[20px] bg-[#EFF3F7] rounded-[4px] mb-[10px]">
//                             <p className="text-sm font-medium text-[#202027]  ">
//                                 taheruiux@gmail.com
//                             </p>
//                         </div>
//                         <div className="py-[15px] px-[20px] bg-[#EFF3F7] rounded-[4px] mb-[10px]">
//                             <p className="text-sm font-medium text-[#202027]  ">taheruiux</p>
//                         </div>
//                         <div className="py-[15px] px-[20px] bg-[#EFF3F7] rounded-[4px] mb-[10px]">
//                             <p className="text-sm font-medium text-[#202027]  ">Physical</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Prompts;
import PromptsPage from '../Components/Prompts/PromptsPage';

const Prompts = () => {
    return (
        <div className="lg:ml-[221px] m-[20px]">
            <PromptsPage />
        </div>
    );
};

export default Prompts;