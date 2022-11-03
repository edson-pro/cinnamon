import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../icons/Logo";
import MenuIcon from "../icons/Menu";
import PlayIcon from "../icons/Play";
import Button from "../ui/Button";

export default function Navabar() {
  const navs = [
    {
      link: "/projects",
      title: "Projects",
    },
    {
      link: "/services",
      title: "Services",
    },
    {
      link: "/about-us",
      title: "About us",
    },
    {
      link: "/careers",
      title: "Careers",
    },
    {
      link: "/blog",
      title: "Blog",
    },
  ];
  const [stickyClass, setStickyClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 10 ? setStickyClass(true) : setStickyClass(false);
    }
  };

  return (
    <nav
      className={`w-full transition-all z-50 fixed  ${
        stickyClass ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-5 max-w-6xl mx-auto">
        <div>
          <Link href="/">
            <Logo stickyClass={stickyClass} />
          </Link>
        </div>
        <div>
          <div className="hidden lg:flex items-center gap-5">
            <ul className="flex items-center gap-5">
              {navs.map((e, index) => {
                return (
                  <li key={index}>
                    <Link
                      className={`${
                        stickyClass ? "text-gray-900" : "text-white"
                      } text-base transition-all`}
                      href={e.link}
                    >
                      {e.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div
              className={`${
                !stickyClass ? "border-white " : "border-primary "
              } ${
                !stickyClass ? "text-white " : "text-primary "
              } border-2 relative rounded-full h-11 w-11 mx-4 flex items-center justify-center`}
            >
              <PlayIcon />
            </div>
            <Button>Contact us</Button>
          </div>
          <a href="" className="lg:hidden block">
            <MenuIcon stickyClass={stickyClass} />
          </a>
        </div>
      </div>
    </nav>
  );
}
