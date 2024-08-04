import React from "react";
import { listFeatures } from "../../../../constant/features";
import clsx from "clsx";
export default function FeaturesList() {
  return (
    <div className="features_list mx-5 flex justify-around text-center my-10">
      {listFeatures.map((feature) => {
        return (
          <div
            className="item_feature w-1/5 border-solid border-2 border-black p-5"
            key={feature.id}
          >
            <i className={clsx("text-sky-400", feature.icon)}></i>
            <h3 className="title_feature text-2xl">{feature.title}</h3>
            <p className="content_feature">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}
