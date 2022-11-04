import React from "react";
import Button from "../ui/Button";

export default function Positions() {
  return (
    <div className="bg-noise-bg bg-noise hero py-28 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
        <div>
          <h4 className="text-5xl my-6 text-white leading-3.125 font-MontBold ">
            We’re growing
          </h4>
          <p className="lg:max-w-md text-gray-200 text-opacity-80 text-base leading-7 my-3">
            Jump on board with Cinnamon and get the privilege of working on
            challenging projects for leading global companies! Make the world a
            better, more connected place.
          </p>

          <div className="my-6">
            <Button>See All Posaitions</Button>
          </div>
        </div>
        <div>
          {[
            "Android Developer",
            "Android Developer",
            "Backend Development Team Lead",
          ].map((e) => {
            return (
              <div className="flex items-center justify-between py-5 border-b border-b-gray-200 border-opacity-10">
                <h4 className="font-MontBold lg:max-w-xs text-xl leading-9 text-white">
                  {e}
                </h4>
                <a href="">
                  <img src="/images/arrowRightWhite.webp" alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
