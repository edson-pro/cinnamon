import React from "react";
import ServiceCard from "../cards/service";
import Button from "../ui/Button";

export default function Services() {
  return (
    <div className="bg-[#1C1C1C] bg-noise hero py-14 lg:py-28 ">
      <div className="max-w-6xl gap-5 py-10 mx-auto px-5 grid grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2 lg:mb-0 mb-10">
          {/* // */}
          <h4 className="md:text-5xl text-4xl text-white leading-3.125 font-MontBold lg:font-MontHeavy ">
            Our services
          </h4>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-10 md:gap-20">
            <ServiceCard
              image={"/images/product-design.webp"}
              description={
                "Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
              }
              title={"Product design"}
            />{" "}
            <ServiceCard
              image={"/images/development.webp"}
              description={
                "By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
              }
              title={"Development"}
            />{" "}
            <ServiceCard
              image={"/images/quality-assurance.webp"}
              description={
                "Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing."
              }
              title={"Quality assurance"}
            />{" "}
            <ServiceCard
              image={"/images/marketing-and-growth.webp"}
              description={
                "By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."
              }
              title={"Marketing & growth"}
            />
          </div>
          <div className="mt-10">
            <Button>See Our Services</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
