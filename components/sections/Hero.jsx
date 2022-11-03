import React from "react";

export default function Hero() {
  return (
    <div className=" bg-[#1C1C1C] hero relative w-full ">
      <div className="lg:py-52 py-24 relative z-20 max-w-6xl mx-auto px-5">
        <div className="">
          <h4 className="lg:text-[80px] text-[46px] leading-[58px] lg:leading-[108px] font-MontHeavy font-extrabold text-white">
            Results focused design & development agency.
          </h4>
          <p className="max-w-2xl my-6 leading-8 lg:leading-9 text-gray-300 text-lg">
            Extend your team with our high performing specialists or hire us to
            shape your product from scratch. Either way, we’ll get your product
            off the ground and build a momentum for your success.
          </p>
        </div>
      </div>
    </div>
  );
}
