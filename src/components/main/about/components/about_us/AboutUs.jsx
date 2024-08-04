import React from "react";

export default function AboutUs() {
  return (
    <div className="grid grid-cols-12 px-20">
      <div className="content_about_us col-span-5 flex items-center mr-10">
        <div>
          <h2 className="title_about_us font-bold text-4xl">About Us</h2>
          <p className="description_about_us mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
      </div>
      <div className="img_about_us col-span-7 rounded-xl overflow-hidden">
        <img
          src="https://www.timedoctor.com/blog/images/2021/09/Tips-to-Improve-Teamwork-In-The-Workplace1.jpg"
          alt="about_us_img"
        />
      </div>
    </div>
  );
}
