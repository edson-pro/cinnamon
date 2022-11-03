import React from "react";
import Button from "../ui/Button";

export default function WorkTogether() {
  return (
    <div className="bg-[#F6F6F6] py-16 lg:py-28 relative">
      <div className="flex max-w-3xl flex-col mx-auto items-center justify-center px-3">
        <h4 className="lg:text-5xl  text-center md:max-w-none max-w-xs text-4xl leading-3.125 lg:leading-3.75 font-MontBold ">
          <span className="hidden md:block">Have a project in mind?</span>
          <br className="block md:hidden" /> Let's work{" "}
          <br className="block md:hidden" /> together.
        </h4>
        <div className="my-10">
          <Button>Contact us</Button>
        </div>
      </div>
      <img
        className="bottom-0 left-0 absolute max-w-9.375 md:max-w-15.625 lg:max-w-md"
        src="/images/job-application.webp"
        alt=""
      />
    </div>
  );
}
