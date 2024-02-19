/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Handle, Position } from "reactflow";
import { iPlus } from "../../../lib/icons/icons";
import { useDispatch } from "react-redux";
import { setActiveComponent } from "../../../redux/features/globals/globalsSlice";
import StartAction from "../../sidebar/actions/StartAction";

const InitialNode = (...props) => {
  const dispatch = useDispatch();
  console.log(props);
  return (
    <div className="px-4 py-2 shadow-md rounded border-[1px] bg-black border-blue-600 min-w-[300px] max-w-[300px] max-h-fit min-h-[100px] backdrop:blur-sm">
      <h1 className="text-blue-600">Chat with ChatGPT-2D</h1>

      <div className="mt-5">
        <h1 className="text-white font-bold text-sm flex items-center gap-1">
          <span className="text-blue-600 text-base">©️</span> ChatGPT-2D
        </h1>

        <div className="ml-5">
          <p className="text-xs text-white mt-3">
            Hello! I'm here to provide direct answers to your questions. What
            would you like to do?
          </p>
          <p className="text-sm font-semibold text-gray-200 mt-3">
            Click👇 to branch 🔀
          </p>
        </div>

        <div className="flex items-center border border-gray-200 bg-transparent rounded mt-8">
          <button
            onClick={() => dispatch(setActiveComponent(<StartAction />))}
            className="w-10 h-7 text-white flex justify-center items-center border-r border-gray-200"
          >
            {iPlus}
          </button>
          <input
            type="text"
            className="w-full h-7 rounded-sm outline-none px-2 bg-transparent border-none text-white text-xs"
          />
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </div>
  );
};

export default InitialNode;
