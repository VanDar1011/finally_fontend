"use client";
import { mindmapApi } from "@/redux/services/mindmap";
import { v4 as uuidv4 } from "uuid";
export default function AddMindMap({ sub }) {
  // console.log("sub", sub);
  const [udpateMindMapById, result] = mindmapApi.useUpdateMindMapByIdMutation();
  const {
    data: mindmap,
    isLoadingMindMap,
    isErrorMindMap,
  } = mindmapApi.useGetMindMapByIdQuery(sub);
  let clone_mindmap = { ...mindmap };
  const handleAddNewMindMap = async () => {
    const time = new Date();
    const year = time.getFullYear().toString().slice(-2); // Last two digits of the year
    const month = String(time.getMonth() + 1).padStart(2, "0"); // Months are zero-based, so we add 1
    const day = String(time.getDate()).padStart(2, "0");
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    // Combine into the desired format
    const formattedTime = `${year}/${month}/${day} ${hours}-${minutes}-${seconds}`;
    const newMindMap = {
      idMap: uuidv4(),
      createAt: formattedTime,
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
    // console.log("clone mindmap", clone_mindmap);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/${sub}`
    );
    if (!response.ok) {
      console.log("response status");
      const data = {
        id: sub,
        mindMapData: [newMindMap],
      };
      const response1 = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response1.ok) {
        console.log("response1 ok");
      }
      return;
    }
    const newMindMapData = [...clone_mindmap.mindMapData, newMindMap];
    clone_mindmap.mindMapData = newMindMapData;
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
