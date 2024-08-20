"use client";
import React, { useEffect } from "react";
import { ReactFlowProvider } from "@xyflow/react";
import GroupButton from "./button/GroupButton";
// import { nodeApi } from "@/redux/services/nodeApi";
// import { edgeApi } from "@/redux/services/edgeApi";
import { useNodesState, useEdgesState } from "@xyflow/react";
import AddNode from "./AddNode";
export default function MindMapFlow({
  nodesItem,
  edgesItem,
  userId,
  id,
  title,
  description,
  mode,
  setModeMindMap,
}) {
  console.log("mode in mindmap flow", mode);
  // console.log("nodesItem", nodesItem);
  // console.log("edgesItem", edgesItem);
  // const {
  //   data: initialNodes,
  //   isLoadingNode,
  //   isErrorNode,
  // } = nodeApi.useGetNodesQuery(1);
  // const {
  //   data: initialEdges,
  //   isLoadingEdges,
  //   isErrorEdges,
  // } = edgeApi.useGetEdgesQuery(1);
  const [nodes, setNodes, onNodesChange] = useNodesState(nodesItem);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgesItem);
  // console.log("nodesItem1", nodesItem);
  // console.log("edgesItem1", edgesItem);
  // console.log("nodes", nodes, "edges", edges);
  // useEffect(() => {
  //   if (!isLoadingNode && !isErrorNode && initialNodes) {
  //     console.log(initialNodes);
  //     setNodes(initialNodes);
  //   }
  // }, [initialNodes, isLoadingNode, isErrorNode, setNodes]);

  // useEffect(() => {
  //   if (!isLoadingEdges && !isErrorEdges && initialEdges) {
  //     console.log(initialEdges);
  //     setEdges(initialEdges);
  //   }
  // }, [initialEdges, isLoadingEdges, isErrorEdges, setEdges]);

  // // Your component's rendering logic here
  // if (isLoadingNode || isLoadingEdges) {
  //   return <div>Loading...</div>;
  // }

  // if (isErrorNode || isErrorEdges) {
  //   return <div>Error loading data</div>;
  // }
  useEffect(() => {
    setNodes(nodesItem);
    setEdges(edgesItem);
  }, [nodesItem, edgesItem]);
  return (
    <>
      <GroupButton
        nodes={nodes}
        edges={edges}
        userId={userId}
        id={id}
        setNodes={setNodes}
        title={title}
        description={description}
        mode={mode}
        setModeMindMap={setModeMindMap}
      />
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
