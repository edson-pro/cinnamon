import React from "react";
import Button from "../ui/Button";

export default function AgileTeam() {
  return (
    <div className="bg-[#F6F6F6] py-20 lg:py-40 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
        <div>
          <h4 className="lg:text-5xl text-4xl leading-3.125 font-MontBold ">
            Agile team <br />
            on demand
          </h4>
        </div>
        <img
          className="lg:absolute lg:my-0 my-10 max-w-xs right-0 bottom-0"
          src="/images/agile-team-on-demand.webp"
          alt=""
        />
        <div>
          <p className="max-w-md text-gray-500 text-opacity-80 text-base leading-7 my-3">
            By hiring and managing talented people with skills specific to your
            project, we build you a team that’s accomplished, agile and scalable
            in both directions.
          </p>
          <div className="my-6">
            <Button>See How It works</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
