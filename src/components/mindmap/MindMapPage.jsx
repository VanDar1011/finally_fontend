"use client";
import { useEffect, useState } from "react";
import MindMapFlow from "./MindMapFlow";
import { mindmapApi } from "@/redux/services/mindmap";
export default function MindMapPage({ id }) {
  const userId = "google-oauth2|102321598521810646645";
  // console.log("id", id);
  const {
    data: mindmap,
    isLoadingMindMap,
    isErrorMindMap,
  } = mindmapApi.useGetMindMapByIdQuery(userId);
  const [dataNodes, setDataNodes] = useState([]);
  const [dataEdges, setDataEdges] = useState([]);
  const [titleMindMap, setTitleMindMap] = useState("");
  const [descriptionMindMap, setDescriptionMindMap] = useState("");
  const [modeMindMap, setModeMindMap] = useState("public");
  useEffect(() => {
    if (!isLoadingMindMap && !isErrorMindMap && mindmap) {
      // console.log(mindmap.mindMapData);
      const dataMindMap = mindmap.mindMapData.filter((item) => {
        return item.idMap === id;
      });
      // console.log("dataMindMap", dataMindMap);
      // console.log("datataMindMap", dataMindMap);
      setDataNodes(dataMindMap[0].data.nodes);
      setDataEdges(dataMindMap[0].data.edges);
      setTitleMindMap(dataMindMap[0].title);
      setDescriptionMindMap(dataMindMap[0].description);
      setModeMindMap(dataMindMap[0].status);
    }
  }, [mindmap, isLoadingMindMap, isErrorMindMap, id]);
  if (isLoadingMindMap) return <div>Loading...</div>;
  if (isErrorMindMap) return <div>Error</div>;
  return (
    <div className="h-screen w-full mx-auto">
      <div className="title_min-map text-center text-2xl font-bold">
        Mind Map
      </div>
      <div className="title_min-map ml-5 text-2xl font-bold flex flex-col">
        <input
          className="title font-semibold text-3xl text-gray-600 outline-none focus:outline-none border-none"
          onChange={(e) => {
            setTitleMindMap(e.target.value);
          }}
          value={titleMindMap}
        />
        <input
          className="title font-semibold text-3xl text-gray-600 outline-none focus:outline-none border-none"
          onChange={(e) => {
            setDescriptionMindMap(e.target.value);
          }}
          value={descriptionMindMap}
        />
      </div>
      <MindMapFlow
        nodesItem={dataNodes}
        edgesItem={dataEdges}
        userId={userId}
        id={id}
        title={titleMindMap}
        description={descriptionMindMap}
        mode={modeMindMap}
        setModeMindMap={setModeMindMap}
      />
    </div>
  );
}
