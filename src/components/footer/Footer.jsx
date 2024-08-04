import React from "react";
import FooterDetail from "./details/FooterDetail";
import "./footer.css";
import FooterMoreInformation from "./moreInformation/FooterMoreInformation";
export default function Footer() {
  return (
    <div className="footer px-5 bg-slate-200 py-8">
      <FooterDetail />
      <FooterMoreInformation />
    </div>
  );
}
