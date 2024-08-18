import React from "react";
import MindMapFlow from "./MindMapFlow";

export default function MindMapPage() {
  return (
    <div className="h-screen w-full mx-auto">
      <div className="title_min-map text-center text-2xl font-bold">
        Mind Map
      </div>
      <MindMapFlow />
    </div>
  );
}
