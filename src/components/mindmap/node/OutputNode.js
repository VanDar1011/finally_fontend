import { useCallback, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import "./styleOutputNode.scss";
function OutputNode({ data, isConnectable }) {
  const [edit, setEdit] = useState(false);
  const [valueText, setValue] = useState(data.label);
  const onChange = useCallback((evt) => {
    // console.log(evt.target.value);
    setValue(evt.target.value);
  }, []);
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
        isConnectable={isConnectable}
      />
      {edit ? (
        <input
          id="text"
          name="text"
          onChange={onChange}
          value={valueText}
          className="nodrag h-full w-full text-center text-wrap"
        />
      ) : (
        <div>{valueText}</div>
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default OutputNode;
