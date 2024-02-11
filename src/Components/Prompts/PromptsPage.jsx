import ai from "../../assets/ai.svg";
import bot from "../../assets/bot1.png";
import human from "../../assets/user.png";
import api from "../../assets/api1.png";
import { useState } from "react";
import WorkFlowHeader from "../../Components/Prompts/WorkFlowHeader";
import AiWorkingData from "../../Components/Prompts/AiWorkingData";
import Buttons from "./Buttons";
import Examples from "./Examples";

const PromptsPage = () => {
    const [workFlow, setWorkFlow] = useState(false);
    const [aiActive, setAiActive] = useState(false);
    const [botActive, setBotActive] = useState(false);

    const [humanActive, setHumanActive] = useState(false);
    const [apiActive, setApiActive] = useState(false);

    const handleBotActive = () => {
        setBotActive(!botActive);
    }
    const handleAiActive = () => {
        setAiActive(!aiActive);
    };
    const handleWorkFlow = () => {
        setWorkFlow(!workFlow);
    };
    const handleApiActive = () => {
        setApiActive(!apiActive);
    };
    const handleHumanActive = () => {
        setHumanActive(!humanActive);
    };

    return (
        <>
            <div className="grid grid-cols-12 w-[100%] me-[31px]">
                <div className="lg:col-span-9 col-span-12 flex flex-col">
                    <div className="flex flex-col m-auto mt-[115px]">
                        <WorkFlowHeader handleWorkFlow={handleWorkFlow} />

                        {workFlow && (
                            <div className="m-auto shadow-prompts h-[91px] bg-white rounded-[5px] p-[6px]  mb-[20px]">
                                <div className="flex items-center gap-[2px]">
                                    <div
                                        onClick={handleAiActive}
                                        className={`${aiActive
                                            ? "border-[#1865FC] border  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] pb-[8px] shadow-prompts text-center  cursor-pointer "
                                            : "border border-white  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] pb-[8px] shadow-prompts text-center  cursor-pointer"
                                            }`}
                                    >
                                        <img
                                            className="w-[30px] h-[30px] mb-[8px]"
                                            src={ai}
                                            alt="ai"
                                        />
                                        <p className="text-[#202027] text-sm  font-normal">AI</p>
                                    </div>

                                    <div onClick={handleBotActive}
                                        className={`${botActive
                                            ? "border-[#1865FC] border  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] pb-[8px] shadow-prompts text-center  cursor-pointer "
                                            : "border border-white  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] pb-[8px] shadow-prompts text-center  cursor-pointer"
                                            }`}>
                                        <img
                                            className="w-[30px] h-[30px] mb-[8px]"
                                            src={bot}
                                            alt="ai"
                                        />
                                        <p className="text-[#202027] text-sm  font-normal">Bot</p>
                                    </div>
                                    <div onClick={handleHumanActive}
                                        className={`${humanActive
                                            ? "border-[#1865FC] border  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] flex flex-col justify-center items-center pb-[8px] shadow-prompts text-center  cursor-pointer "
                                            : "border border-white  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] flex flex-col justify-center items-center pb-[8px] shadow-prompts text-center  cursor-pointer"
                                            }`}>
                                        <img
                                            className="w-[30px] h-[30px] mb-[8px]"
                                            src={human}
                                            alt="ai"
                                        />
                                        <p className="text-[#202027] text-sm  font-normal">Human</p>
                                    </div>
                                    <div onClick={handleApiActive}
                                        className={`${apiActive
                                            ? "border-[#1865FC] border  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] pb-[8px] shadow-prompts text-center  cursor-pointer "
                                            : "border border-white  w-[70px] rounded-[6px]  h-[80px] pt-[16px] px-[20px] pb-[8px] shadow-prompts text-center  cursor-pointer"
                                            }`}>
                                        <img
                                            className="w-[30px] h-[30px] mb-[8px]"
                                            src={api}
                                            alt="ai"
                                        />
                                        <p className="text-[#202027] text-sm  font-normal">API</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {aiActive && <AiWorkingData />}

                    </div>
                    {/* upload buttons */}
                    <Buttons active={aiActive} />
                </div>

                <div className="lg:col-span-3 col-span-12 flex lg:justify-end justify-center lg:me-[31px]   ">
                    <Examples />
                </div>
            </div>
        </>
    );
};

export default PromptsPage;
