import React from "react";

export default function FooterMoreInformation() {
  return (
    <div className="footer_more_information mt-5">
      <div className="container_more_information grid grid-cols-5 gap-4">
        <div className="title_footer_more_information">
          <h2 className="font-bold text-xl">FWR</h2>
        </div>
        <div className="address_footer_more_information">
          <h2 className="font-bold text-xl">Address</h2>
          <span className="block">123, ABC Street</span>
          <span className="block">City, State 12345</span>
        </div>
        <div className="resource_footer_more_information col-span-2 flex justify-center flex-cols">
          <div className="container_resource">
            <h2 className="font-bold text-xl">Free Resources</h2>
            <span className="block">Use our HTML blocks for FREE.</span>
            <span className="block"> All are MIT License</span>
          </div>
        </div>
      </div>
    </div>
  );
}
