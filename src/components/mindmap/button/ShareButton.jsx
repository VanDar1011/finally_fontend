"use client";
export default function ShareButton() {
  const handleShare = () => {
    console.log("sharing...");
  };
  return (
    <button className="px-2 py-1 bg-red-600 border-2" onClick={handleShare}>
      Chia sẻ
    </button>
  );
}
