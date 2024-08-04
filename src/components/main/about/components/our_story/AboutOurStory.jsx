import React from "react";

export default function AboutOurStory() {
  return (
    <div className="grid grid-cols-12 px-20 my-10 pt-10 items-center">
      <div className="content_our_story col-span-5 flex items-center">
        <div>
          <h2 className="title_our_story font-bold text-4xl">Our Story</h2>
          <p className="description_our_story mt-3">
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
      <div className="img_about_us col-span-7 rounded-xl overflow-hidden shadow-xl">
        <div className="flex justify-between bg-slate-400 p-2">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/012/256/061/original/animated-web-developer-character-half-body-flat-person-4k-footage-with-alpha-channel-software-engineering-color-cartoon-style-illustration-for-motion-graphic-design-and-animation-video.jpg"
            width={150}
            height={300}
            className="rounded-xl"
            alt="person1_our_story_img"
          />
          <img
            src="https://img.freepik.com/free-vector/cute-man-working-laptop-with-coffee-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3869.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722729600&semt=ais_hybrid"
            width={150}
            height={300}
            className="rounded-xl"
            alt="person2_our_story_img"
          />
          <img
            src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
            width={150}
            height={300}
            className="rounded-xl"
            alt="person3_our_story_img"
          />
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/026/485/526/small_2x/it-developer-coding-on-laptop-line-2d-animation-software-engineering-remote-employee-4k-motion-graphic-coder-programmer-developer-linear-animated-cartoon-flat-concept-white-background-video.jpg"
            width={150}
            height={300}
            className="rounded-xl"
            alt="person4_our_story_img"
          />
        </div>
      </div>
    </div>
  );
}
