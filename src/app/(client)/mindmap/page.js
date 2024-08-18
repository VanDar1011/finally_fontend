import AddMindMap from "@/components/mindmap/button/AddMindMap";
import ListMindMap from "@/components/mindmap/ListMindMap";

export default function MindMapHome() {
  return (
    <div className="h-screen w-full px-4 py-2">
      <h1 className="text-3xl font-bold">Mind Map của tôi</h1>
      <AddMindMap />
      <ListMindMap />
    </div>
  );
}
