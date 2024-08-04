import React from "react";
import MenuHeader from "./menu/MenuHeader";

export default function Header() {
  return (
    <header className="header py-4 px-5 flex justify-between items-center">
      <span className="logo_header font-bold text-violet-800 text-lg">
        Mindmap Flow
      </span>
      <MenuHeader />
    </header>
  );
}
