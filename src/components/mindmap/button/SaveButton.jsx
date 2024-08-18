"use client";
export default function SaveButton({ onClick }) {
  return (
    <button className=" px-2 py-1 bg-sky-600 border-2" onClick={onClick}>
      Lưu
    </button>
  );
}
