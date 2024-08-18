"use client";
import { mindmapApi } from "@/redux/services/mindmap";
import { useEffect, useState } from "react";
export default function ListMindMap() {
  const {
    data: mindmap,
    isLoadingMindMap,
    isErrorMindMap,
  } = mindmapApi.useGetMindMapByIdQuery(1);
  const [mindmapData, setMindmapData] = useState([]);
  useEffect(() => {
    if (!isLoadingMindMap && !isErrorMindMap && mindmap) {
      setMindmapData(mindmap[0].mindMapData);
    }
  }, [mindmap, isLoadingMindMap, isErrorMindMap]);
  if (isLoadingMindMap) return <div>Loading...</div>;
  if (isErrorMindMap) return <div>Error</div>;
  return (
    <div>
      {mindmapData?.map((item) => (
        <div key={item.idMap}>{item.title}</div>
      ))}
    </div>
  );
}
