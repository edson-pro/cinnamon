import React, { useRef } from "react";
import OfficeCard from "../cards/office";

export default function Offices() {
  const myRef = useRef(null);

  const executeScroll = (action) => {
    const scw = myRef.current.offsetWidth;
    const oneIw = scw / 4;
    const oneIwp = (oneIw * 35) / 100;
    myRef.current.scrollBy({
      left:
        action === "next"
          ? oneIw + oneIwp
          : action === "prev"
          ? -(oneIw + oneIwp)
          : 0,
      behavior: "smooth",
    });
    console.log();
  };

  return (
    <div className="bg-white lg:pb-16 pb-0 py-16 relative">
      <div className="max-w-6xl mx-auto  px-5">
        <h4 className="text-5xl my-6 leading-[50px] font-MontBold ">
          Our offices
        </h4>
      </div>
      <div ref={myRef} className="w-screen no-scrollbar overflow-x-scroll">
        <div className="my-10 mx-auto max-w-6xl  flex gap-7 px-5">
          <OfficeCard
            image={
              "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzagreb.b5180ce4.jpeg&w=1200&q=75"
            }
            description={"Slavonska avenija 6, 10000, Zagreb, Croatia"}
            title={"Zagreb"}
          />
          <OfficeCard
            image={
              "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnew-york.4d639475.jpeg&w=1200&q=75"
            }
            description={"500 7th Ave, New York, NY 10018, United States"}
            title={"New York"}
          />
          <OfficeCard
            image={
              "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnew-york.4d639475.jpeg&w=1200&q=75"
            }
            description={"500 7th Ave, New York, NY 10018, United States"}
            title={"New York"}
          />
          <OfficeCard
            image={
              "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnew-york.4d639475.jpeg&w=1200&q=75"
            }
            description={"500 7th Ave, New York, NY 10018, United States"}
            title={"New York"}
          />
        </div>
      </div>
      <div className="hidden max-w-6xl mx-auto lg:flex px-5 my-0 items-center gap-9">
        <a
          className="cursor-pointer"
          onClick={() => {
            executeScroll("prev");
          }}
        >
          <img
            className="w-[48px] grayscale h-[27px]"
            src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow-left.cd95ba98.png&w=96&q=100"
            alt=""
          />
        </a>
        <a
          className="cursor-pointer"
          onClick={() => {
            executeScroll("next");
          }}
        >
          <img
            className="w-[48px] h-[27px]"
            src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow-right.edcfdab6.png&w=96&q=100"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
