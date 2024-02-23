/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActionData,
  setActiveComponent,
} from "../../../redux/features/globals/globalsSlice";

const apiSteps = [
  "Step 1 Define why",
  "Step 2 User stories",
  "Step 3 Data Flow Diagram",
  "Step 4 Assign end points to diagram",
];

const StartAction = () => {
  const { activeComponent } = useSelector((state) => state.global);
  const [step, setStep] = useState(1);
  const [stepTwo, setStepTwo] = useState("");

  const dispatch = useDispatch();

  function generateUniqueId() {
    // Get the current date and time
    const now = new Date();

    // Format the date and time as a string
    const dateString = now.toISOString().replace(/[-:TZ]/g, "");

    // Generate a random number between 0 and 9999
    const randomNumber = Math.floor(Math.random() * 10000);

    // Combine the date string and random number to create the unique ID
    const uniqueId = dateString + randomNumber.toString().padStart(4, "0");

    return uniqueId;
  }

  const handleSetData = (data) => {
    const id = generateUniqueId();
    dispatch(
      setActionData({
        parent_id: activeComponent?.parent_id,
        new_id: `${activeComponent?.parent_id}${id}`,
        data: data,
      })
    );
    setStep(1);
    setStepTwo("");
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
                  onClick={() => setStepTwo("API")}
                  className="w-full h-10 rounded border border-blue-600 flex justify-center items-center text-sm font-semibold hover:bg-blue-600 hover:text-white cursor-pointer uppercase"
                >
                  API
                </div>
                <div
                  onClick={() => setStepTwo("Prompt")}
                  className="w-full h-10 rounded border border-blue-600 flex justify-center items-center text-sm font-semibold hover:bg-blue-600 hover:text-white cursor-pointer uppercase"
                >
                  Prompt
                </div>
                <div
                  onClick={() => setStepTwo("Bot-Robot")}
                  className="w-full h-10 rounded border border-blue-600 flex justify-center items-center text-sm font-semibold hover:bg-blue-600 hover:text-white cursor-pointer uppercase"
                >
                  Bot-Robot
                </div>
                <div
                  onClick={() => setStepTwo("Human")}
                  className="w-full h-10 rounded border border-blue-600 flex justify-center items-center text-sm font-semibold hover:bg-blue-600 hover:text-white cursor-pointer uppercase"
                >
                  Human
                </div>
              </div>
            </div>
          )}

          {stepTwo === "Prompt" && (
            <div
              onClick={() =>
                handleSetData("User will select single prompt or prompt chain")
              }
              className="w-full break-all h-fit p-2 text-sm bg-indigo-600 text-white rounded cursor-pointer"
            >
              User will select single prompt or prompt chain
            </div>
          )}
          {stepTwo === "API" && (
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
