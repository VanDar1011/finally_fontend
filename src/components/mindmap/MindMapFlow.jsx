"use client";
import React, { useEffect } from "react";
import { ReactFlowProvider } from "@xyflow/react";
import GroupButton from "./button/GroupButton";
import { nodeApi } from "@/redux/services/nodeApi";
import { edgeApi } from "@/redux/services/edgeApi";
import { useNodesState, useEdgesState } from "@xyflow/react";
import AddNode from "./AddNode";
export default function MindMapFlow() {
  const {
    data: initialNodes,
    isLoadingNode,
    isErrorNode,
  } = nodeApi.useGetNodesQuery();
  const {
    data: initialEdges,
    isLoadingEdges,
    isErrorEdges,
  } = edgeApi.useGetEdgesQuery();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  useEffect(() => {
    if (!isLoadingNode && !isErrorNode && initialNodes) {
      console.log(initialNodes);
      setNodes(initialNodes);
    }
  }, [initialNodes, isLoadingNode, isErrorNode, setNodes]);

  useEffect(() => {
    if (!isLoadingEdges && !isErrorEdges && initialEdges) {
      console.log(initialEdges);
      setEdges(initialEdges);
    }
  }, [initialEdges, isLoadingEdges, isErrorEdges, setEdges]);

  // Your component's rendering logic here
  if (isLoadingNode || isLoadingEdges) {
    return <div>Loading...</div>;
  }

  if (isErrorNode || isErrorEdges) {
    return <div>Error loading data</div>;
  }
  return (
    <>
      <GroupButton nodes={nodes} edges={edges} />
      <ReactFlowProvider>
        <AddNode
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          setEdges={setEdges}
          setNodes={setNodes}
        />
      </ReactFlowProvider>
    </>
  );
}
