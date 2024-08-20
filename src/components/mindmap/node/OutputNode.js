import { useCallback, useState } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";
import "./styleOutputNode.scss";
function OutputNode(data) {
  // console.log("data", data);
  const { setNodes } = useReactFlow();
  const [edit, setEdit] = useState(false);
  const onChange = useCallback(
    (evt) => {
      console.log("change value of node");
      setNodes((nds) =>
        nds.map((nd) => {
          if (nd.id === data.id) {
            return { ...nd, data: { ...nd.data, label: evt.target.value } };
          }
          return nd;
        })
      );
    },
    [setNodes, data.id]
  );
  const handleClick = useCallback(() => {
    setEdit(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setEdit(false);
  }, []);
  return (
    <div
      className="h-full w-full"
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={data.isConnectable}
      />
      {edit ? (
        <input
          id="text"
          name="text"
          onChange={onChange}
          defaultValue={data.data.label}
          className="nodrag h-full w-full text-center text-wrap"
        />
      ) : (
        <div>{data.data.label}</div>
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={data.isConnectable}
      />
    </div>
  );
}

export default OutputNode;
