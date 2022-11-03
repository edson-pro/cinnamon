import React from "react";
import Button from "../ui/Button";

export default function WhoWeAre() {
  return (
    <div className="bg-[#F6F6F6] py-32 relative">
      <div className="max-w-6xl mx-auto  px-5">
        <div className="col-span-3">
          <h4 className="lg:text-5xl text-4xl leading-[50px] font-MontBold ">
            Who we are
          </h4>
          <p className="max-w-md my-8 lg:my-3 text-gray-500 text-opacity-80 text-base leading-7">
            Meet our international teams made up of 86 innovators, branched into
            8 departments, that influence the market throughout 20 different
            countries.
          </p>
          <img
            className="lg:absolute right-0 max-w-[280px] lg:max-w-xs"
            src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwho-we-are.db3b807b.png&w=1080&q=75"
            alt=""
          />
          <div className=" lg:grid hidden max-w-2xl my-12 grid-cols-2 gap-10">
            {[
              "Product design",
              "Web development",
              "Mobile development",
              "Quality assurance",
              "Marketing",
              "Project management",
              "Human resources",
              "Sales",
              "Fluffy friends",
            ].map((e, index) => {
              return (
                <h4 className="font-MontBold text-lg" key={index}>
                  {e}
                </h4>
              );
            })}
          </div>
          <div className="my-6">
            <Button>Read About us</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
