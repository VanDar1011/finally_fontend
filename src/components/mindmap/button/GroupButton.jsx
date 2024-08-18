"use client";
import SaveButton from "./SaveButton";
import ShareButton from "./ShareButton";
import { nodeApi } from "@/redux/services/nodeApi";
import { edgeApi } from "@/redux/services/edgeApi";
export default function GroupButton({ nodes, edges }) {
  const [addNode, result] = nodeApi.useAddNodeMutation();
  const [addEdge, result2] = edgeApi.useAddEdgeMutation();
  const handleSaveButton = () => {
    console.log("nodes", ...nodes, "edges", ...edges);
    nodes.forEach((node) => {
      const newNode = {
        id: node.id,
        position: node.position,
        data: node.data,
        origin: node.origin,
        type: node.type,
      };
      addNode(newNode);
      // addNode(node);
    });
    edges.forEach((edge) => {
      addEdge(edge);
    });
  };
  return (
    <div className="flex h-fit w-11/12 mx-auto">
      <div className="ml-auto">
        <SaveButton onClick={handleSaveButton} />
        <ShareButton />
      </div>
    </div>
  );
}
