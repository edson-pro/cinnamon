import React from "react";

export default function Testimonies() {
  return (
    <div className="relative py-28">
      <div className="font-MontHeavy absolute text-[#5135ff1a] text-[258px] top-[0px] left-[0px]">
        “
      </div>
      <div className="max-w-5xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-6 ">
        <div className="col-span-4">
          <div>
            {" "}
            <h4 className="lg:text-4xl text-3xl leading-[50px] font-MontBold ">
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
                src="https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F25RHUxbYmQGNyDPZAv3ugA%2F4a1c8b7c06bf709f09d8b64feea6ea9a%2FGarinProfile.png&w=1920&q=75"
                alt=""
              />
              <div>
                <h4 className="font-MontSemiBold">Garin Toren,</h4>
                <p className="text-gray-500 text-base">CEO, ping</p>
              </div>
            </div>
          </div>
          <div className="flex  my-10 items-center gap-9">
            <a href="">
              <img
                className="w-[48px] h-[27px]"
                src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow-left.cd95ba98.png&w=96&q=100"
                alt=""
              />
            </a>
            <a href="">
              <img
                className="w-[48px] h-[27px]"
                src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farrow-right.edcfdab6.png&w=96&q=100"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="col-span-2 flex-col flex items-start lg:items-end justify-between">
          <img
            className="w-52 h-16 lg:block hidden"
            src="https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F28oURAifg08iWymnAaHweH%2F7b7fb5663e060dfae4de4c3f70c38052%2FpingLogo.png&w=1920&q=75"
            alt=""
          />
          <a className="text-primary flex  items-center gap-4 " href="">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.772 5.65733L0 1.88667L1.88533 0L7.54267 5.65733L1.88533 11.3147L0 9.428L3.772 5.65733Z"
                fill="#5135FF"
              />
            </svg>
            <span className="leading-7 border-b-[1.5px] border-primary">
              VIEW CASE STUDY
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
