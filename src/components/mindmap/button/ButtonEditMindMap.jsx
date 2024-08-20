"use client";
export default function ButtonEditMindMap({ onClick }) {
  return (
    <div>
      <button className="text-cyan-500" onClick={onClick}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
    </div>
  );
}
