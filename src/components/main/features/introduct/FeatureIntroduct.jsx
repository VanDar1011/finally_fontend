import React from "react";

export default function FeatureIntroduct() {
  return (
    <div className="features_introduct text-center w-7/12 mx-auto">
      <h2 className="font-bold text-4xl">Features</h2>
      <p className="content_feature text-xl mt-3">
        The main aim of creating FWR blocks is to help designers, developers and
        agencies create websites and web apps quickly and easily. Each and every
        block uses minimal custom styling and is based on the utility first
        Tailwind framework.
      </p>
      <button className="btn_feature py-2 px-8 border-solid border-2 border-sky-500 my-5 text-xl">
        Learn More
      </button>
    </div>
  );
}
