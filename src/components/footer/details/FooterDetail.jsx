import React from "react";
import { FOOTER_LINKS as footer } from "../../../constant/footer";
import clsx from "clsx";

export default function FooterDetail() {
  return (
    <div className="footer_details grid grid-cols-5 gap-4">
      {footer.map((item, index) => {
        return (
          <div
            className={clsx("footer_detail" + item.title, "mr-5")}
            key={index}
          >
            <h2 className="font-bold text-xl">{item.title}</h2>
            <ul className="mt-3">
              {item.links.map((link, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="link_footer">
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
