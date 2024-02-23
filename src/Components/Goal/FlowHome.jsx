/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useMemo } from "react";
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Background,
  BackgroundVariant,
} from "reactflow";
import dagre from "dagre";
import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";
import { useDispatch, useSelector } from "react-redux";
import { setActionData } from "../../redux/features/globals/globalsSlice";

export const initialNodes = [
  {
    id: "1",
    type: "custom",
    data: {
      id: "1",
      name: "Initial",
      component: "Int",
    },
    sourcePosition: "right",
    targetPosition: "left",
    position: { x: 0, y: 0 },
  },
];

export const initialEdges = [
  // { id: "e12", source: "1", target: "2", type: "smoothstep", animated: false },
];

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 300;
const nodeHeight = 100;

const getLayoutedElements = (nodes, edges, direction = "TB") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "right";
    node.sourcePosition = isHorizontal ? "right" : "left";

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const FlowHome = () => {
  const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
    initialNodes,
    initialEdges
  );
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const nodeTypes = useMemo(
    () => ({
      custom: (props) => (
        <CustomNode
          {...props}
          nodes={nodes}
          edges={edges}
          setNodes={setNodes}
          setEdges={setEdges}
        />
      ),
    }),
    [setNodes, setEdges]
  );

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: true },
          eds
        )
      ),
    []
  );

  console.log("Nodes: ", nodes);
  console.log("Edges: ", edges);

  return (
    <div className="w-full z-10 relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      >
        {/* <Panel position="top-right">
          <button onClick={() => onLayout("TB")}>vertical layout</button>
          <button onClick={() => onLayout("LR")}>horizontal layout</button>
        </Panel> */}
        <Background
          id="1"
          gap={20}
          color="gray"
          variant={BackgroundVariant.Dots}
        />
        <Background
          id="2"
          gap={20}
          color="gray"
          variant={BackgroundVariant.Dots}
        />
        <div className="h-screen bg-gray-50"></div>
      </ReactFlow>
    </div>
  );
};

export default FlowHome;
