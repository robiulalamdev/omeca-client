/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Handle, Position } from "reactflow";
import InitialNode from "./Nodes/InitialNode";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActionData } from "../../redux/features/globals/globalsSlice";

const CustomNode = ({ data, nodes, edges, setNodes, setEdges }) => {
  const { actionData } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const handleNode = (id) => {
    console.log(id);
    const newNode = {
      id: `${id}`,
      type: "custom",
      data: {
        id: `${id}`,
        name: "New Node",
        job: "New Job",
        emoji: "🚀",
        componentData: actionData,
      },
      position: { x: 400, y: 400 },
    };

    const newEdge = {
      id: `e${`${id}`}`,
      source: `1`,
      target: `${id}`,
      type: "Bezier",
      animated: false,
    };

    // Call setNodes and setEdges to update the nodes and edges state
    setNodes((prevNodes) => [...prevNodes, newNode]);
    setEdges((prevEdges) => [...prevEdges, newEdge]);
    dispatch(setActionData(null));
  };

  useMemo(() => {
    if (actionData) {
      const id = nodes.length + 1;
      console.log("length", nodes.length, "new:", id);
      handleNode(id);
    }
  }, [actionData]);

  return (
    <>
      {data?.component === "Int" && (
        <InitialNode
          data={data}
          nodes={nodes}
          edges={edges}
          setNodes={setNodes}
          setEdges={setEdges}
        />
      )}

      {data?.componentData && (
        <div className="px-4 py-2 shadow-md rounded border-[1px] bg-black border-blue-600 min-w-[300px] max-w-[300px] max-h-fit min-h-[100px] backdrop:blur-sm">
          <h1 className="text-white">{data?.componentData}</h1>
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
    </>
  );
};

export default CustomNode;
