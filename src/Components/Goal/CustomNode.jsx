/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Handle, Position } from "reactflow";
import InitialNode from "./Nodes/InitialNode";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActionData,
  setActiveComponent,
} from "../../redux/features/globals/globalsSlice";
import { iPlus } from "../../lib/icons/icons";
import StartAction from "../sidebar/actions/StartAction";
import { generateUniqueId, getRandomColor } from "../../lib/services/services";

const CustomNode = ({ data, nodes, edges, setNodes, setEdges }) => {
  const { actionData } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const handleParentCopy = async (parentId, parentColor) => {
    const getId = await generateUniqueId();
    const newId = `${getId}`;
    const newNode = {
      id: newId,
      type: "custom",
      sourcePosition: "left",
      targetPosition: "right",
      data: {
        id: newId,
        name: "Initial",
        background: parentColor,
        component: "Int",
      },
      position: { x: 400, y: 0 },
    };
    const newEdge = {
      id: `e$${newId}`,
      source: parentId,
      target: newId,
      type: "Bezier",
      animated: false,
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
    setEdges((prevEdges) => [...prevEdges, newEdge]);
  };

  const handleNode = async (parentId, newId, data) => {
    const color = await getRandomColor();
    const newNode = {
      id: newId,
      type: "custom",
      sourcePosition: "left",
      targetPosition: "right",
      data: {
        id: newId,
        background: color,
        name: "New Node",
        job: "New Job",
        emoji: "🚀",
        data: data,
        componentData: actionData,
      },
      position: { x: 400, y: 400 },
    };
    const newEdge = {
      id: `e$${newId}`,
      source: parentId,
      target: newId,
      type: "Bezier",
      animated: false,
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
    setEdges((prevEdges) => [...prevEdges, newEdge]);
  };

  useMemo(() => {
    if (actionData?.parent_id) {
      console.log(actionData);
      handleNode(actionData?.parent_id, actionData?.new_id, actionData?.data);
      dispatch(setActionData(null));
    }
  }, [actionData]);

  const handleAdd = (data) => {
    dispatch(
      setActiveComponent({ parent_id: data?.id, component: <StartAction /> })
    );
  };

  return (
    <div style={{ backgroundColor: data?.background }}>
      {data?.component === "Int" && (
        <InitialNode
          data={data}
          nodes={nodes}
          edges={edges}
          setNodes={setNodes}
          setEdges={setEdges}
          handleParentCopy={handleParentCopy}
        />
      )}

      {data?.data && (
        <div
          className="px-4 py-2 shadow-md rounded border-[1px] border-blue-600 min-w-[300px] max-w-[300px] max-h-fit min-h-[100px] backdrop:blur-sm"
          style={{ backgroundColor: data?.background }}
        >
          <div className="">
            <p className="text-xs text-white mt-3">{data?.data}</p>

            <ul className="text-gray-300 font-semibold text-sm mt-5 list-disc ml-5">
              <li
                onClick={() => handleParentCopy(data?.id, data?.background)}
                className="hover:text-blue-600"
              >
                Learn something new
              </li>
              <li
                onClick={() => handleParentCopy(data?.id, data?.background)}
                className="hover:text-blue-600"
              >
                Solve a problem
              </li>
              <li
                onClick={() => handleParentCopy(data?.id, data?.background)}
                className="hover:text-blue-600"
              >
                Explore a topic
              </li>
            </ul>

            <div className="flex items-center border border-gray-200 rounded mt-8">
              <button
                onClick={() => handleAdd(data)}
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
        </div>
      )}

      <Handle
        type="target"
        position={Position.Left}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-16 !bg-teal-500"
      />

      {/* <div className="px-4 py-2 shadow-md rounded bg-transparent border-[1px] border-blue-600 min-w-[300px] max-w-[400px] max-h-fit min-h-[100px] backdrop:blur-sm">
        <button
          className="text-white"
          onClick={() => handleNode(parseInt(data.id))}
        >
          Add Edge {data.id}
        </button>
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

            <ul className="text-blue-gray-400 font-semibold mt-5 list-disc ml-5">
              <li>Learn something new</li>
              <li>Solve a problem</li>
              <li>Explore a topic</li>
            </ul>
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
      </div> */}
    </div>
  );
};

export default CustomNode;
