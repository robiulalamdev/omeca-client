/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActionData,
  setActiveComponent,
} from "../../../redux/features/globals/globalsSlice";
import { generateUniqueId } from "../../../lib/services/services";

const apiSteps = [
  "Step 1 Define why",
  "Step 2 User stories",
  "Step 3 Data Flow Diagram",
  "Step 4 Assign end points to diagram",
];

const StartAction = () => {
  const { activeComponent } = useSelector((state) => state.global);
  const [step, setStep] = useState(1);
  const [stepTwo, setStepTwo] = useState(null);

  const dispatch = useDispatch();

  const handleSetData = async (data) => {
    const id = await generateUniqueId();
    dispatch(
      setActionData({
        parent_id: activeComponent?.parent_id,
        new_id: `${id}`,
        data: data,
        background: stepTwo?.color,
      })
    );
    setStep(1);
    setStepTwo(null);
    dispatch(setActiveComponent(null));
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
        </>
      )}
    </div>
  );
};

export default StartAction;
