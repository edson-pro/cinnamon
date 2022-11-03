import React from "react";
import Button from "../ui/Button";

export default function WorkTogether() {
  return (
    <div className="bg-[#F6F6F6] py-16 lg:py-28 relative">
      <div className="flex max-w-3xl flex-col mx-auto items-center justify-center px-3">
        <h4 className="lg:text-5xl  text-center md:max-w-none max-w-xs text-[40px] leading-[55px] lg:leading-[70px] font-MontBold ">
          <span className="hidden md:block">Have a project in mind?</span>
          <br className="block md:hidden" /> Let's work{" "}
          <br className="block md:hidden" /> together.
        </h4>
        <div className="my-10">
          <Button>Contact us</Button>
        </div>
      </div>
      <img
        className="bottom-0 left-0 absolute max-w-[150px] md:max-w-[250px] lg:max-w-md"
        src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjob-application.afe28cef.png&w=1080&q=75"
        alt=""
      />
    </div>
  );
}
