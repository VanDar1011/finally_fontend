"use client";
import { mindmapApi } from "@/redux/services/mindmap";
import { v4 as uuidv4 } from "uuid";
export default function AddMindMap({ sub }) {
  // console.log(session);
  // console.log(sub);
  const [udpateMindMapById, result] = mindmapApi.useUpdateMindMapByIdMutation();
  const {
    data: mindmap,
    isLoadingMindMap,
    isErrorMindMap,
  } = mindmapApi.useGetMindMapByIdQuery(sub);
  let clone_mindmap = { ...mindmap };
  const handleAddNewMindMap = () => {
    console.log("clone mindmap", clone_mindmap);
    // udpateMindMapById({}
    const newMindMap = {
      idMap: uuidv4(),
      createAt: "2021-11-11 11:11:11",
      status: "public",
      title: "Chưa có tiêu đề",
      description: "Chưa có mô tả",
      data: {
        nodes: [
          {
            id: "0",
            type: "input",
            position: {
              x: 600,
              y: 10,
            },
            data: {
              label: "Parent",
            },
            origin: [0.5, 0],
            measured: {
              width: 150,
              height: 40,
            },
            selected: false,
          },
        ],
        edges: [],
      },
    };
    const newMindMapData = [...clone_mindmap.mindMapData, newMindMap];
    // console.log("new mindMap", newMindMap);
    // clone_mindmap.mindMapData.push(newMindMap);
    clone_mindmap.mindMapData = newMindMapData;
    // console.log("mindmap data", clone_mindmap.mindMapData);
    // console.log("clone_mindmap", clone_mindmap);

    // const user = mindmap.mindMapData.map((item) => {
    //   const clone_item = { ...item };
    //   // console.log("clone_item before ", clone_item);
    //   if (+clone_item.idMap === +id) {
    //     // console.log("vao day");
    //     // item.data.nodes = nodes;
    //     // item.data.edges = edges;
    //     clone_item.title = title;
    //     clone_item.description = description;
    //     clone_item.data = {
    //       ...clone_item.data,
    //       nodes: [...nodes], // or use a deep clone method if necessary
    //       edges: [...edges],
    //     };
    //   }
    //   return clone_item;
    // });
    // console.log("user", user);
    // console.log("clone_mindmap after", clone_mindmap);
    // clone_mindmap.mindMapData = user;
    // console.log("clone_mindmap after", clone_mindmap);

    udpateMindMapById({
      id: sub,
      data: {
        mindMapData: clone_mindmap.mindMapData,
      },
    });
  };
  return (
    <button
      onClick={handleAddNewMindMap}
      className="px-4 py-2 bg-sky-600 border-2 rounded-xl text-white"
    >
      Thêm mới
    </button>
  );
}
