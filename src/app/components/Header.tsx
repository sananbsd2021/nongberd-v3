import React from "react";
import ImageSlider from "./ImageSlider";
// import Image from "next/image";

const HeaderPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-300 to-blue-300">
      <div className="row p-0 flex">
        <div className="col-1 text-center d-sm-block d-none">

        </div>
        <div className="col-7 pt-2 d-sm-block d-none">
          <span className="fs22 Prompt">โรงเรียนบ้านหนองเบิด</span>
          <br />
          <span className="fs14 Prompt">Nongberd School</span>
        </div>
      </div>
      <ImageSlider />
    </div>
  );
};

export default HeaderPage;
