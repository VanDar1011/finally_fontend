"use client";
export default function ButtonDeleteMindMap({ onClick }) {
  return (
    <div>
      <button className="text-red-500" onClick={onClick}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}
