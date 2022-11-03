import React from "react";
import Button from "../ui/Button";

export default function College() {
  return (
    <div className="bg-white py-16 relative">
      <div className="max-w-6xl  mx-auto grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-10 px-3">
        <div className="p-7 col-span-1">
          <img className="max-w-17.5" src="/images/cinn-college.webp" alt="" />
        </div>
        <div className="col-span-2 p-3 lg:p-8">
          <p className="lg:max-w-sm text-gray-700 text-opacity-80 text-base leading-7 my-3">
            Seize the unique opportunity to participate in a wide range of
            courses conducted by professionals with an impeccable reputation in
            the digital industry.
          </p>

          <div className="my-6">
            <Button>See How It works</Button>
          </div>
        </div>
      </div>
      <img
        className="absolute hidden lg:block max-w-sm right-0 bottom-0"
        src="/images/cinn-college-illustration.webp"
        alt=""
      />
    </div>
  );
}
