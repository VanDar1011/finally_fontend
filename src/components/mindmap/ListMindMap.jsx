"use client";
import { mindmapApi } from "@/redux/services/mindmap";
import { useEffect, useState } from "react";
import ItemMindMap from "./ItemMindMap";
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
    <>
      <div className="flex items-center py-5 font-bold text-center">
        <div className="w-1/6">
          <input type="checkbox" name="checkkall" id="checkkall" />
        </div>
        <div className="w-1/2">Tên</div>
        <div className="w-1/4">Tạo lúc</div>
        <div className="w-1/4">Hành động</div>
      </div>
      <div className="listMindMap">
        {mindmapData.map((item) => (
          <ItemMindMap item={item} key={item.idMap} />
        ))}
      </div>
    </>
  );
}
