import React from "react";
import HomeCommon from "./components/common/HomeCommon";
import HomeBenifit from "./components/benifit/HomeBenifit";

export default function HomePage() {
  return (
    <div className="home px-5 bg-violet-300 py-7">
      <HomeCommon />
      <HomeBenifit />
    </div>
  );
}
