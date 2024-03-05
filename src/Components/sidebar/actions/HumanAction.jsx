/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateUniqueId } from "../../../lib/services/services";
import {
  setActionData,
  setActiveComponent,
} from "../../../redux/features/globals/globalsSlice";

const HumanAction = ({ stepTwo, setStep, setStepTwo }) => {
  const { activeComponent } = useSelector((state) => state.global);

  const [human, setHuman] = useState(null);
  const [permission, setPermission] = useState("Search");

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

  const handlePermission = async (e) => {
    e.preventDefault();
    handleSetData(e.target.permission.value);
    e.target.reset();
  };
  return (
    <div>
      {!human && (
        <div className="grid grid-cols-1 gap-1">
          <button
            onClick={() => setHuman("Assign Task")}
            className="w-full h-10 bg-blue-600 text-white flex justify-center items-center rounded text-xs"
          >
            Assign Task
          </button>
          <button
            onClick={() => setHuman("Permissions")}
            className="w-full h-10 bg-lime-600 text-white flex justify-center items-center rounded text-xs"
          >
            Permissions
          </button>
          <button
            onClick={() => setHuman("Vote / Approve")}
            className="w-full h-10 bg-violet-600 text-white flex justify-center items-center rounded text-xs"
          >
            Vote / Approve
          </button>
        </div>
      )}

      {human === "Assign Task" && (
        <div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <span className="text-sm text-[12px] text-slate-950 mb-[4px]">
                Type 1
              </span>

              <button
                onClick={() => handleSetData("Insource")}
                className="w-full h-[40px] bg-blue-600 hover:bg-blue-700 text-sm font-semibold mt-2 text-white rounded-[4px]"
              >
                Insource
              </button>
            </div>
            <div>
              <span className="text-sm text-[12px] text-slate-950 mb-[4px]">
                Type 2
              </span>

              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => handleSetData("Pre Production")}
                  className="w-full h-[40px] bg-emerald-600 hover:bg-emerald-700 text-sm font-semibold mt-2 text-white rounded-[4px]"
                >
                  Pre Production
                </button>
                <button
                  onClick={() => handleSetData("Planning Production")}
                  className="w-full h-[40px] bg-emerald-600 hover:bg-emerald-700 text-sm font-semibold mt-2 text-white rounded-[4px]"
                >
                  Planning Production
                </button>
                <button
                  onClick={() => handleSetData("Production")}
                  className="w-full h-[40px] bg-emerald-600 hover:bg-emerald-700 text-sm font-semibold mt-2 text-white rounded-[4px]"
                >
                  Production
                </button>
                <button
                  onClick={() => handleSetData("Post Production")}
                  className="w-full h-[40px] bg-emerald-600 hover:bg-emerald-700 text-sm font-semibold mt-2 text-white rounded-[4px]"
                >
                  Post Production
                </button>
              </div>
            </div>
            <div>
              <span className="text-sm text-[12px] text-slate-950 mb-[4px]">
                Type 3
              </span>

              <button
                onClick={() => handleSetData("Outsource")}
                className="w-full h-[40px] bg-indigo-600 hover:bg-indigo-700 text-sm font-semibold mt-2 text-white rounded-[4px]"
              >
                Outsource
              </button>
            </div>
          </div>
        </div>
      )}
      {human === "Permissions" && (
        <div>
          <div className="grid grid-cols-2">
            <button
              onClick={() => setPermission("Search")}
              className={`w-full h-10 flex justify-center items-center text-xs ${
                permission === "Search"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-50 text-black"
              }`}
            >
              Search
            </button>
            <button
              onClick={() => setPermission("Group Search")}
              className={`w-full h-10 flex justify-center items-center text-xs ${
                permission === "Group Search"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-50 text-black"
              }`}
            >
              Group Search
            </button>
          </div>
          {permission === "Search" && (
            <form
              onSubmit={handlePermission}
              className="grid grid-cols-1 gap-2"
            >
              <div>
                <span className="text-sm text-[12px] text-slate-950 mb-[4px]">
                  Search
                </span>
                <input
                  type="text"
                  name="permission"
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
          {permission === "Group Search" && (
            <form
              onSubmit={handlePermission}
              className="grid grid-cols-1 gap-2"
            >
              <div>
                <span className="text-sm text-[12px] text-slate-950 mb-[4px]">
                  Group Search
                </span>
                <input
                  type="text"
                  name="permission"
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
      {human === "Vote / Approve" && (
        <div>
          <button
            onClick={() => handleSetData("Vote")}
            className="w-full h-10 bg-violet-600 text-white flex justify-center items-center rounded text-xs"
          >
            Vote
          </button>
          <button
            onClick={() => handleSetData("Approve")}
            className="w-full h-10 bg-green-600 text-white flex justify-center items-center rounded text-xs mt-2"
          >
            Approve
          </button>
        </div>
      )}
    </div>
  );
};

export default HumanAction;
