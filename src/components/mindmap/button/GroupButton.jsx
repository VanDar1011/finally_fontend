"use client";
import { useEffect, useRef, useState } from "react";
import SaveButton from "./SaveButton";
import ShareButton from "./ShareButton";
import { mindmapApi } from "@/redux/services/mindmap";

// import { nodeApi } from "@/redux/services/nodeApi";
// import { edgeApi } from "@/redux/services/edgeApi";
export default function GroupButton({
  nodes,
  edges,
  userId,
  id,
  title,
  description,
  mode,
  setModeMindMap,
}) {
  const [udpateMindMapById, result] = mindmapApi.useUpdateMindMapByIdMutation();
  const {
    data: mindmap,
    isLoadingMindMap,
    isErrorMindMap,
  } = mindmapApi.useGetMindMapByIdQuery(userId);
  const shareButton = useRef(null);
  let clone_mindmap = { ...mindmap };
  const [modeShare, setModeShare] = useState(mode);
  const handleSaveButton = () => {
    // console.log("mindmap in group button", mindmap);
    // console.log("idUser", userId);
    // console.log("id", id);
    // console.log("nodes", nodes);
    // console.log("edges", edges);
    const user = mindmap.mindMapData.map((item) => {
      const clone_item = { ...item };
      console.log("clone_item before ", clone_item);
      if (clone_item.idMap === id) {
        // console.log("vao day");
        // item.data.nodes = nodes;
        // item.data.edges = edges;
        clone_item.title = title;
        clone_item.description = description;
        clone_item.status = shareButton.current.value;
        clone_item.data = {
          ...clone_item.data,
          nodes: [...nodes], // or use a deep clone method if necessary
          edges: [...edges],
        };
        // setModeMindMap(shareButton.current.value);
      }
      return clone_item;
    });
    // console.log("user", user);
    console.log("clone_mindmap after", clone_mindmap);
    clone_mindmap.mindMapData = user;
    // console.log("clone_mindmap after", clone_mindmap);

    udpateMindMapById({
      id: userId,
      data: {
        mindMapData: user,
      },
    });

    // udpateMindMapById(userId, user);
  };
  const handleUpdateShareButton = () => {
    // console.log(shareButton.current.value);
    setModeShare(shareButton.current.value);
  };
  useEffect(() => {
    setModeShare(mode);
  }, [mode]);
  return (
    <div className="flex h-fit w-11/12 mx-auto">
      <div className="ml-auto">
        <SaveButton onClick={handleSaveButton} />
        <ShareButton
          shareButton={shareButton}
          modeShare={modeShare}
          // mode={mode}
          onChange={handleUpdateShareButton}
        />
      </div>
    </div>
  );
}
