import React from "react";
import AboutUs from "./components/about_us/AboutUs";
import AboutOurStory from "./components/our_story/AboutOurStory";

export default function AboutPage() {
  return (
    <div className="about px-5 py-4">
      <AboutUs />
      <AboutOurStory />
    </div>
  );
}
