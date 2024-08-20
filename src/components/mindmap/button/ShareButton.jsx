"use client";
export default function ShareButton({ shareButton, onChange, modeShare }) {
  console.log("current modeShare", modeShare);
  return (
    <label className="px-2 py-2 bg-red-600 border-2">
      {" "}
      Sharing :{" "}
      <select
        className="bg-orange-300"
        ref={shareButton}
        onChange={onChange}
        // defaultValue={mode}
        value={modeShare}
      >
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
    </label>
  );
}
