import React from "react";
import FeaturesList from "./list/FeaturesList";
import FeatureIntroduct from "./introduct/FeatureIntroduct";

export default function FeaturesPage() {
  return (
    <div className="features mt-5">
      <FeatureIntroduct />
      <FeaturesList />
    </div>
  );
}
