/* eslint-disable react/no-unescaped-entities */
import React, { memo } from "react";
import { Handle, Position } from "reactflow";

const newNode = {
  id: "3",
  type: "custom",
  data: { name: "John Doe", job: "CTO", emoji: "🚀" },
  position: { x: 100, y: 100 },
};

// Add new edges connecting the new node to existing nodes
const newEdges = [
  { id: "e23", source: "2", target: "3", type: "smoothstep", animated: false },
  { id: "e31", source: "3", target: "1", type: "smoothstep", animated: false },
];

const CustomNode = ({ data, nodes, edges, setNodes, setEdges }) => {
  const handleNode = (id) => {
    const newNode = {
      id: `${id + 1}`,
      type: "custom",
      data: {
        id: `${id + 1}`,
        name: "New Node",
        job: "New Job",
        emoji: "🚀",
      },
      position: { x: 400, y: 400 },
    };

    const newEdge = {
      id: `e${`${id + 1}`}`,
      source: `${id}`,
      target: `${id + 1}`,
      type: "smoothstep",
      animated: false,
    };

    console.log(nodes, edges);

    // Call setNodes and setEdges to update the nodes and edges state
    setNodes((prevNodes) => [...prevNodes, newNode]);
    setEdges((prevEdges) => [...prevEdges, newEdge]);
  };

  return (
    <div className="px-4 py-2 shadow-md rounded bg-transparent border-[1px] border-blue-600 min-w-[300px] max-w-[400px] max-h-fit min-h-[100px] backdrop:blur-sm">
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
    </div>
    // <div className="px-4 py-2 shadow-md rounded-md bg-black border-2 border-stone-400">
    //   <div className="flex">
    //     <div className="rounded-full w-12 h-12 flex justify-center items-center bg-black text-white">
    //       {data.emoji} 😂
    //     </div>
    //     <div className="ml-2">
    //       <div className="text-lg font-bold">{data.name}</div>
    //       <div className="text-gray-500">{data.job}</div>
    //     </div>
    //   </div>

    //   <Handle
    //     type="target"
    //     position={Position.Top}
    //     className="w-16 !bg-teal-500"
    //   />
    //   <Handle
    //     type="source"
    //     position={Position.Bottom}
    //     className="w-16 !bg-teal-500"
    //   />
    // </div>
  );
};

export default CustomNode;
