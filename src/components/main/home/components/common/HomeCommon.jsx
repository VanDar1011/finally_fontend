import React from "react";
export default function HomeCommon() {
  return (
    <div className="home_common text-center">
      <h2 className="text-3xl font-bold">Học tập hiệu quả với bản đồ tư duy</h2>
      <button className="text-white px-4 py-3 bg-blue-500 rounded-3xl mt-4">
        Sử dụng miễn phí
      </button>
      <div className="container_img_home flex justify-center">
        <img
          src="https://images.wondershare.com/edrawmind/articles2023/how-to-make-a-mind-map/mind-map.png"
          width={700}
          height={600}
          alt="image"
        />
      </div>
    </div>
  );
}
