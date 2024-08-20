"use client";
import { useRouter } from "next/navigation";
import ButtonDeleteMindMap from "./button/ButtonDeleteMindMap";
import ButtonEditMindMap from "./button/ButtonEditMindMap";

export default function ItemMindMap({ item }) {
  const router = useRouter();
  const handleEditMindMap = () => {
    router.push(`/mindmap/${item.idMap}`);
  };
  const handleDeleteMindMap = () => {
    console.log("handleDeleteMindMap");
  };
  return (
    <div className="flex items-center text-center rounded-sm shadow-sm shadow-slate-400 hover:bg-slate-200 cursor-pointer bg-white">
      <div className="w-1/6 ">
        <input type="checkbox" name="checkkall" id="checkkall" />
      </div>
      <div className="w-1/2" onClick={handleEditMindMap}>
        <span className="block">{item.title}</span>
        <span className="block text-slate-400">{item.description}</span>
      </div>
      <div className="w-1/4">{item.createAt}</div>
      <div className="w-1/4 flex justify-center gap-2 text-slate-400">
        <ButtonEditMindMap onClick={handleEditMindMap} />
        <ButtonDeleteMindMap onClick={handleDeleteMindMap} />
      </div>
    </div>
  );
}
