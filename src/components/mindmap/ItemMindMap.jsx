import ButtonDeleteMindMap from "./button/ButtonDeleteMindMap";
import ButtonEditMindMap from "./button/ButtonEditMindMap";

export default function ItemMindMap({ key, item }) {
  return (
    <div className="flex items-center py-2 text-center">
      <div className="w-1/6 ">
        <input type="checkbox" name="checkkall" id="checkkall" />
      </div>
      <div className="w-1/2">
        <span className="block">{item.title}</span>
        <span className="block">{item.description}</span>
      </div>
      <div className="w-1/4">{item.createAt}</div>
      <div className="w-1/4 flex justify-center gap-2">
        <ButtonEditMindMap />
        <ButtonDeleteMindMap />
      </div>
    </div>
  );
}
