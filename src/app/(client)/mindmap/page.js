import AddMindMap from "@/components/mindmap/button/AddMindMap";
import ListMindMap from "@/components/mindmap/ListMindMap";

export default function MindMapHome() {
  return (
    <div className="h-screen w-full">
      <AddMindMap />
      <h1>Mind Map của tôi</h1>
      <ListMindMap />
    </div>
  );
}
