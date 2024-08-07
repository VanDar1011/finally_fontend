"use client";
import React, { useCallback, useState, useRef } from "react";
import TextUpdaterNode from "./TypeUpdaterNode";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  Panel,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./styleTextUpdaterNode.scss";
import "./index.scss";
const nodeTypes = { textUpdater: TextUpdaterNode };
const initialNodes = [
  {
    id: "1",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "Parent" },
    // style: { backgroundColor: "#6ede87", color: "white" },
  },
  // {
  //   id: "2",
  //   type: "output",
  //   position: { x: 0, y: 100 },
  //   data: { label: "2" },
  //   // style: { backgroundColor: "#6ede87", color: "white" },
  // },
  // {
  //   id: "3",
  //   position: { x: 200, y: 100 },
  //   data: { label: "3" },
  //   // style: { backgroundColor: "#6ede87", color: "white" },
  // },
];
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    // label: "hello", // label for edge:name
    // type: "step", // edge type: smoothstep,step
  },
  //   { id: "e1-3", source: "1", target: "3", animated: true },
];
export default function MindMapPage() {
  const [variant, setVariant] = useState("dots");
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  //   const onNodesChange = useCallback(
  //     (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //     [setNodes],
  //   );
  //   const onEdgesChange = useCallback(
  //     (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //     [setEdges],
  //   );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
    [setEdges]
  );
  const nodeColor = (node) => {
    switch (node.type) {
      case "input":
        return "#6ede87";
      case "output":
        return "#6865A5";
      default:
        return "#ff0072";
    }
  };
  //   const defaultEdgeOptions = { animated: true };
  return (
    <div className="h-screen w-screen container mx-auto">
      <h2 className="text-center">Mind Map</h2>
      <div className="w-11/12 h-4/5 border-2 p-2 mx-auto border-red-300">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          // fitWiew help zome to fit the screen
        >
          <Controls />
          <MiniMap
            nodeColor={nodeColor}
            nodeStrokeWidth={3}
            zoomable
            pannable
          />
          <Background variant={variant} gap={12} size={1} color="#ef9a9a" />
          <Panel position="top-right">
            <div className="mt-2 border-2">
              <button
                onClick={() => setVariant("dots")}
                className="px-6 py-1 bg-slate-500 rounded-sm text-white"
              >
                dots
              </button>
              <button
                onClick={() => setVariant("lines")}
                className="px-6 py-1 bg-lime-500 rounded-sm text-white"
              >
                lines
              </button>
              <button
                onClick={() => setVariant("cross")}
                className="px-6 py-1 bg-slate-500 rounded-sm text-white"
              >
                cross
              </button>
            </div>
          </Panel>
        </ReactFlow>
      </div>
    </div>
  );
}
