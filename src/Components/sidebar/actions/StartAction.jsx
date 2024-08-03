/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActionData,
  setActiveComponent,
} from "../../../redux/features/globals/globalsSlice";
import { generateUniqueId } from "../../../lib/services/services";
import { useForm } from "react-hook-form";
import HumanAction from "./HumanAction";
import { useSendMessageMutation } from "../../../redux/features/chat/chatApi";
import { toast } from "react-toastify";

const apiSteps = [
  "Step 1 Define why",
  "Step 2 User stories",
  "Step 3 Data Flow Diagram",
  "Step 4 Assign end points to diagram",
];

const StartAction = () => {
  const { handleSubmit, register } = useForm();

  const { activeComponent } = useSelector((state) => state.global);
  const [step, setStep] = useState(1);
  const [stepTwo, setStepTwo] = useState(null);
  const [botRobot, setBotRobot] = useState(null);

  const dispatch = useDispatch();

  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const handleSendMessage = async (message) => {
    const options = {
      data: {
        userPrompt: message,
        // historyId: currentHistory?._id,
      },
    };
    const result = await sendMessage(options);
    return result;
    // if (result?.data?.success) {

    // }
  };

  const handleSetData = async (data) => {
    const result = await handleSendMessage(data);
    // console.log(result);
    if (result?.data?.success) {
      const id = await generateUniqueId();
      dispatch(
        setActionData({
          parent_id: activeComponent?.parent_id,
          new_id: `${id}`,
          data: result?.data?.data?.assistantResponse,
          background: stepTwo?.color,
        })
      );
      setStep(1);
      setStepTwo(null);
      dispatch(setActiveComponent(null));
    } else {
      toast.error("Response generate failed");
    }
  };

  const handleFormData = async (data) => {
    const message = `1. How are you Currently doing this: ${data?.step_1}, 2. Process Mining: ${data?.step_2} 3. Process Mapping: ${data?.step_3} 4. Deep Learning: ${data?.step_4}`;
    const result = await handleSendMessage(message);
    // console.log(result);
    if (result?.data?.success) {
      const id = await generateUniqueId();
      dispatch(
        setActionData({
          parent_id: activeComponent?.parent_id,
          new_id: `${id}`,
          data: result?.data?.data?.assistantResponse,
          code: (
            <div className="bg-teal-50 rounded-[10px] p-2 max-w-[270px] w-full mx-auto">
              <p className="text-base text-blue-600 font-bold text-center uppercase tracking-[0.90px]">
                Form Data
              </p>
              <p className="text-sm text-slate-900 font-medium break-words">
                {data?.step_1}
              </p>
              <p className="text-sm text-slate-900 font-medium break-words mt-2">
                {data?.step_2}
              </p>
              <p className="text-sm text-slate-900 font-medium break-words mt-2">
                {data?.step_3}
              </p>
              <p className="text-sm text-slate-900 font-medium break-words mt-2">
                {data?.step_4}
              </p>
            </div>
          ),
          background: stepTwo?.color,
        })
      );
      setStep(1);
      setStepTwo(null);
      dispatch(setActiveComponent(null));
    } else {
      toast.error("Response generate failed");
    }
  };

  return (
    <div className="mt-8 px-8">
      {step === 1 && (
        <div className="w-full ">
          <h1 className="text-black font-semibold">Start</h1>

          <div className="flex items-start gap-3">
            <button
              onClick={() => setStep(2)}
              className="w-full h-8 bg-blue-600 text-white flex justify-center items-center rounded text-xs"
            >
              Action
            </button>
            <button
              onClick={() => setStep(2)}
              className="w-full h-8 bg-sky-600 text-white flex justify-center items-center rounded text-xs"
            >
              Re-Action
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <>
          <h1 className="text-black font-semibold">Step 2</h1>
          {!stepTwo && (
            <div>
              <div className="grid grid-cols-2 border gap-2 cursor-pointer">
                <div
                  onClick={() => setStepTwo({ name: "API", color: "#8FD14F" })}
                  className="w-full h-14 rounded border border-[#8FD14F] bg-[#8FD14F] text-white flex justify-center items-center text-sm font-semibold hover:bg-blue-600 hover:text-white cursor-pointer uppercase"
                >
                  API
                </div>
                <div
                  onClick={() =>
                    setStepTwo({ name: "Prompt", color: "#414BB2" })
                  }
                  className="w-full h-14 rounded border border-[#414BB2] bg-[#414BB2] text-white flex justify-center items-center text-sm font-semibold hover:bg-blue-600 hover:text-white cursor-pointer uppercase"
                >
                  Prompt
                </div>
                <div
                  onClick={() =>
                    setStepTwo({ name: "Bot / Robot", color: "#1A1A1A" })
                  }
                  className="w-full h-14 rounded border border-[#1A1A1A] bg-[#1A1A1A] text-white flex justify-center items-center text-sm font-semibold hover:bg-blue-600 hover:text-white cursor-pointer uppercase"
                >
                  Bot / Robot
                </div>
                <div
                  onClick={() =>
                    setStepTwo({ name: "Human", color: "#FAC710" })
                  }
                  className="w-full h-14 rounded border border-[#FAC710] bg-[#FAC710] text-white flex justify-center items-center text-sm font-semibold hover:bg-blue-600 hover:text-white cursor-pointer uppercase"
                >
                  Human
                </div>
              </div>
            </div>
          )}

          {stepTwo?.name === "Prompt" && (
            <div
              onClick={() =>
                handleSetData("User will select single prompt or prompt chain")
              }
              className="w-full break-all h-fit p-2 text-sm bg-indigo-600 text-white rounded cursor-pointer"
            >
              User will select single prompt or prompt chain
            </div>
          )}
          {stepTwo?.name === "API" && (
            <div className="grid grid-cols-1 gap-2">
              {apiSteps.map((api, index) => (
                <div
                  onClick={() => handleSetData(api)}
                  key={index}
                  className="w-full break-all h-fit p-2 text-sm bg-indigo-500 hover:bg-indigo-600 text-white rounded cursor-pointer"
                >
                  {api}
                </div>
              ))}
            </div>
          )}
          {stepTwo?.name === "Bot / Robot" && (
            <div>
              {!botRobot && (
                <>
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => setBotRobot(1)}
                      className="w-full h-8 bg-blue-600 text-white flex justify-center items-center rounded text-xs"
                    >
                      Bot
                    </button>
                    <button
                      onClick={() => setBotRobot(1)}
                      className="w-full h-8 bg-sky-600 text-white flex justify-center items-center rounded text-xs"
                    >
                      Robot
                    </button>
                  </div>
                </>
              )}
              {botRobot === 1 && (
                <form
                  onSubmit={handleSubmit(handleFormData)}
                  className="grid grid-cols-1 gap-2"
                >
                  <div>
                    <span className="text-sm text-[12px] text-slate-950 mb-[4px]">
                      How are you Currently doing this
                    </span>
                    <input
                      {...register("step_1", { required: true })}
                      type="text"
                      required
                      className="w-full h-[40px] rounded-[8px] outline-none border bg-slate-50 px-2 text-sm"
                    />
                  </div>
                  <div>
                    <span className="text-sm text-[12px] text-slate-950 mb-[4px]">
                      Process Mining
                    </span>
                    <input
                      {...register("step_2", { required: true })}
                      type="text"
                      required
                      className="w-full h-[40px] rounded-[8px] outline-none border bg-slate-50 px-2 text-sm"
                    />
                  </div>
                  <div>
                    <span className="text-sm text-[12px] text-slate-950 mb-[4px]">
                      Process Mapping
                    </span>
                    <input
                      {...register("step_3", { required: true })}
                      type="text"
                      required
                      className="w-full h-[40px] rounded-[8px] outline-none border bg-slate-50 px-2 text-sm"
                    />
                  </div>
                  <div>
                    <span className="text-sm text-[12px] text-slate-950 mb-[4px]">
                      Deep Learning
                    </span>
                    <input
                      {...register("step_4", { required: true })}
                      type="text"
                      required
                      className="w-full h-[40px] rounded-[8px] outline-none border bg-slate-50 px-2 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-[42px] bg-blue-600 hover:bg-blue-700 text-sm font-semibold mt-2 text-white rounded-[8px]"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          )}
          {stepTwo?.name === "Human" && (
            <div className="">
              <HumanAction
                stepTwo={stepTwo}
                setStep={setStep}
                setStepTwo={setStepTwo}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default StartAction;
