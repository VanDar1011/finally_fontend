"use client";
import { v4 as uuidv4 } from "uuid";
import React, { useCallback, useState, useRef } from "react";
import TextUpdaterNode from "./TypeUpdaterNode";
import InputNode from "./node/InputNode";
import OutputNode from "./node/OutputNode";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  Panel,
  addEdge,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./index.scss";

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  input: InputNode,
  output: OutputNode,
};
export default function AddNode({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  setEdges,
  setNodes,
}) {
  // console.log("nodesItem after", nodes);
  // console.log("edgesItem after", edges);
  const [variant, setVariant] = useState("dots");
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);

  // console.log("nodes", nodes, "edges", edges);
  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback((params) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const idNode = uuidv4();
        // console.log(idNode);
        const newNode = {
          id: idNode,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Công việc` },
          origin: [0.5, 0.0],
          type: "output",
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({
            id: `${connectingNodeId.current}-${idNode}`,
            source: connectingNodeId.current,
            target: idNode,
            animated: true,
          })
        );
      }
    },
    [screenToFlowPosition]
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

  const defaultEdgeOptions = { animated: true };
  return (
    <div
      className="w-11/12 h-5/6 border-2 p-2 mx-auto border-red-500 wrapper"
      ref={reactFlowWrapper}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        // fitView
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0, 0]}
        // fitWiew help zome to fit the screen
      >
        <Controls />
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
        <Background variant={variant} gap={12} size={1} color="#ef9a96" />
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
              className="px-6 py-1 bg-slate-200 rounded-sm text-white"
            >
              cross
            </button>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}
