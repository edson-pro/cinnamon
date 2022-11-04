import React from "react";
import Behance from "../icons/Behance";
import Dribble from "../icons/Dribble";
import Facebook from "../icons/Facebook";
import Feed from "../icons/Feed";
import Instagram from "../icons/Instagram";
import Linkedin from "../icons/Linkedin";
import Logo from "../icons/Logo";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function Footer() {
  return (
    <div className="bg-noise bg-noise-bg pb-8 pt-16 ">
      <div className="max-w-6xl grid-cols-1 md:gap-0 gap-10 grid md:grid-cols-5 mx-auto px-5">
        <div className="lg:col-span-2 col-span-1 ">
          <a href="">
            <Logo />
          </a>
        </div>
        <div className="lg:col-span-3 col-span-4">
          <h4 className="text-xl leading-8 text-white font-MontBold">
            All software,
            <br className="block md:hidden" /> zero bullshit.
          </h4>
        </div>
      </div>
      <div className="max-w-6xl grid-cols-1 gap- grid md:grid-cols-5 mx-auto px-5">
        <div className="lg:col-span-2 col-span-1 flex flex-col justify-between">
          <div>
            <ul className="my-8 grid grid-cols-2 md:flex md:flex-col">
              {[
                { link: "/home", title: "Home" },
                { link: "/projects", title: "Projects" },
                { link: "/services", title: "Services" },
                { link: "/about-us", title: "About us" },
                { link: "/careers", title: "Careers" },
                { link: "/blog", title: "Blog" },
              ].map((e) => {
                return (
                  <li>
                    <a className="text-sm py-3 block text-white" href={e.link}>
                      {e.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <a
            href="mailto:hello@cinnamon.agency"
            className="underline text-white text-sm"
          >
            hello@cinnamon.agency
          </a>
        </div>
        <div className="lg:col-span-3 col-span-4 ">
          <div>
            <div className="grid my-8 grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-MontBold text-base">Zagreb</h4>
                <p className="text-white text-sm my-2 leading-6 text-opacity-80">
                  Slavonska avenija 6, 10000, Zagreb, Croatia +385 99 347 3103
                </p>
              </div>{" "}
              <div>
                <h4 className="text-white font-MontBold text-base">New York</h4>
                <p className="text-white text-sm my-2 leading-6 text-opacity-80">
                  500 7th Ave, New York, NY 10018, United States
                </p>
              </div>{" "}
              <div>
                <h4 className="text-white font-MontBold text-base">Belgrade</h4>
                <p className="text-white text-sm my-2 leading-6 text-opacity-80">
                  Bulevar vojvode Mišića 37 11000, Belgrade, Serbia
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-20 items-center justify-between gap-10">
            <div className="max-w-sm">
              <h4 className="text-white font-MontBold text-base">
                Our newsletter
              </h4>
              <div className="my-4">
                <Input />
              </div>
              <Button className={"w-full flex"}>Subscribe</Button>
            </div>
            <div className="flex items-center md:items-end flex-col gap-4">
              <img
                className="w-52 h-16"
                src="/images/pangea-badge.7734fbc8 (1).svg"
                alt=""
              />
              <img
                className="w-52 h-16"
                src="/images/clutch-badge.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="w-full h-0.3 bg-opacity-30 bg-gray-600 my-8 max-w-6xl px-5 mx-auto"></div>
      </div>
      <div className="max-w-6xl flex-col-reverse  flex gap-6 md:flex-row items-center justify-between mx-auto px-3">
        <div className="flex items-center text-opacity-60  text-white gap-4">
          <p>&copy; 2022 Cinnamon</p>
          <a className="underline" href="">
            Privacy Policy
          </a>
        </div>
        <div className="px-5 w-full md:hidden">
          <div className="w-full h-0.3 bg-opacity-30 bg-gray-600 my-0 max-w-6xl px-5 mx-auto"></div>
        </div>
        <div className="">
          <div className="flex items-center gap-5">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/cinnamon-llc"
            >
              <Linkedin />
            </a>
            <a target="_blank" href="https://dribbble.com/cinnamon_agency">
              <Dribble />
            </a>
            <a target="_blank" href="https://www.behance.net/cinnamon_design">
              <Behance />
            </a>
            <a target="_blank" href="https://www.instagram.com/cinnamon.agency">
              <Instagram />
            </a>
            <a target="_blank" href="https://www.facebook.com/cinnamonagency">
              <Facebook />
            </a>
            <a target="_blank" href="https://www.cinnamon.agency/rss">
              <Feed />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
