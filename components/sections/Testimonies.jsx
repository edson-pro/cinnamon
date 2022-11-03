import React from "react";
import Chevron from "../icons/Chevron";

export default function Testimonies() {
  return (
    <div className="relative py-28">
      <div className="font-MontHeavy absolute text-[#5135ff1a] text-[258px] top-0 left-0">
        “
      </div>
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-6 ">
        <div className="col-span-4">
          <div>
            {" "}
            <h4 className="lg:text-4xl text-3xl leading-3.125 font-MontBold ">
              They’re consistent, and the communication is good.
            </h4>
            <p className="max-w-2xl lg:my-5 my-14 text-gray-500 text-opacity-80 text-base leading-7">
              When I have a deadline, they would work extra hours on the weekend
              and after hours. Cinnamon gives the impression of being a smaller
              team that’s focused on customers.
            </p>
          </div>
          <div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <img
                className="h-14 w-14 rounded-full"
                src="/images/GarinProfile.webp"
                alt=""
              />
              <div>
                <h4 className="font-MontSemiBold">Garin Toren,</h4>
                <p className="text-gray-500 text-base">CEO, ping</p>
              </div>
            </div>
          </div>
          <div className="flex  my-10 items-center gap-9">
            <a className="hover:-translate-y-2 transition-all duration-200 cursor-pointer">
              <img className="w-12 h-7" src="/images/arrow-left.webp" alt="" />
            </a>
            <a className="hover:-translate-y-2 transition-all duration-200 cursor-pointer">
              <img className="w-12 h-7" src="/images/arrow-right.webp" alt="" />
            </a>
          </div>
        </div>
        <div className="col-span-2 flex-col flex items-start lg:items-end justify-between">
          <img
            className="w-52 h-16 lg:block hidden"
            src="/images/pingLogo.webp"
            alt=""
          />
          <a className="text-primary flex  items-center gap-4 " href="">
            <Chevron />
            <span className="leading-7 border-b-0.5 border-primary">
              VIEW CASE STUDY
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
