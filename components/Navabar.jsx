import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import Button from "./Button";

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
      <div className="flex items-center justify-between py-4 px-3 max-w-6xl mx-auto">
        <div>
          <a href="">
            <svg
              className={`fill-current ${
                stickyClass ? "text-gray-900" : "text-white"
              } fill-current`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 355 45"
              width={160}
              height={20}
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <clipPath id="__lottie_element_56">
                  <rect width={355} height={45} x={0} y={0} />
                </clipPath>
              </defs>
              <g clipPath="url(#__lottie_element_56)">
                <g
                  style={{ display: "block" }}
                  transform="matrix(0.3799999952316284,0,0,0.3799999952316284,138.9970703125,22.5)"
                  opacity={1}
                >
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      fillOpacity={1}
                      d=" M-354.7430114746094,-0.23999999463558197 C-354.7430114746094,-36.62699890136719 -331.06298828125,-58.7130012512207 -294.6759948730469,-58.7130012512207 C-273.2279968261719,-58.7130012512207 -255.75,-50.29100036621094 -244.78399658203125,-36.944000244140625 C-244.78399658203125,-36.944000244140625 -266.5530090332031,-18.832000732421875 -266.5530090332031,-18.832000732421875 C-271.9570007324219,-26.774999618530273 -281.6470031738281,-32.494998931884766 -293.72601318359375,-32.494998931884766 C-313.1099853515625,-32.494998931884766 -325.5060119628906,-20.42099952697754 -325.5060119628906,-0.23999999463558197 C-325.5060119628906,20.099000930786133 -313.1099853515625,32.65399932861328 -293.72601318359375,32.65399932861328 C-281.4880065917969,32.65399932861328 -271.9570007324219,27.090999603271484 -266.5530090332031,19.143999099731445 C-266.5530090332031,19.143999099731445 -244.78399658203125,37.41899871826172 -244.78399658203125,37.41899871826172 C-255.75,50.606998443603516 -271.7980041503906,58.87200164794922 -294.6759948730469,58.87200164794922 C-331.06298828125,58.87200164794922 -354.7430114746094,36.305999755859375 -354.7430114746094,-0.23999999463558197z"
                    />
                  </g>
                </g>
                <g
                  style={{ display: "block" }}
                  transform="matrix(0.3799999952316284,0,0,0.3799999952316284,138.98110961914062,22.5)"
                  opacity={1}
                >
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      fillOpacity={1}
                      d=" M-231.61300659179688,-56.49100112915039 C-231.61300659179688,-56.49100112915039 -203.1719970703125,-56.49100112915039 -203.1719970703125,-56.49100112915039 C-203.1719970703125,-56.49100112915039 -203.1719970703125,56.48699951171875 -203.1719970703125,56.48699951171875 C-203.1719970703125,56.48699951171875 -231.61300659179688,56.48699951171875 -231.61300659179688,56.48699951171875 C-231.61300659179688,56.48699951171875 -231.61300659179688,-56.49100112915039 -231.61300659179688,-56.49100112915039z"
                    />
                  </g>
                </g>
                <g
                  style={{ display: "block" }}
                  transform="matrix(0.3799999952316284,0,0,0.3799999952316284,138.97093200683594,22.5)"
                  opacity="0.9999996671466557"
                >
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      fillOpacity={1}
                      d=" M-78.44499969482422,-56.49100112915039 C-78.44499969482422,-56.49100112915039 -78.44499969482422,56.80400085449219 -78.44499969482422,56.80400085449219 C-78.44499969482422,56.80400085449219 -92.74700164794922,56.80400085449219 -92.74700164794922,56.80400085449219 C-92.74700164794922,56.80400085449219 -155.031005859375,-5.802000045776367 -155.031005859375,-5.802000045776367 C-155.031005859375,-5.802000045776367 -155.031005859375,56.48699951171875 -155.031005859375,56.48699951171875 C-155.031005859375,56.48699951171875 -182.6790008544922,56.48699951171875 -182.6790008544922,56.48699951171875 C-182.6790008544922,56.48699951171875 -182.6790008544922,-56.64899826049805 -182.6790008544922,-56.64899826049805 C-182.6790008544922,-56.64899826049805 -168.5399932861328,-56.64899826049805 -168.5399932861328,-56.64899826049805 C-168.5399932861328,-56.64899826049805 -106.09300231933594,5.797999858856201 -106.09300231933594,5.797999858856201 C-106.09300231933594,5.797999858856201 -106.09300231933594,-56.49100112915039 -106.09300231933594,-56.49100112915039 C-106.09300231933594,-56.49100112915039 -78.44499969482422,-56.49100112915039 -78.44499969482422,-56.49100112915039z"
                    />
                  </g>
                </g>
                <g
                  style={{ display: "block" }}
                  transform="matrix(0.3799999952316284,0,0,0.3799999952316284,138.95994567871094,22.5)"
                  opacity={1}
                >
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      fillOpacity={1}
                      d=" M44.685001373291016,-56.49100112915039 C44.685001373291016,-56.49100112915039 44.685001373291016,56.80400085449219 44.685001373291016,56.80400085449219 C44.685001373291016,56.80400085449219 30.382999420166016,56.80400085449219 30.382999420166016,56.80400085449219 C30.382999420166016,56.80400085449219 -31.900999069213867,-5.802000045776367 -31.900999069213867,-5.802000045776367 C-31.900999069213867,-5.802000045776367 -31.900999069213867,56.48699951171875 -31.900999069213867,56.48699951171875 C-31.900999069213867,56.48699951171875 -59.54899978637695,56.48699951171875 -59.54899978637695,56.48699951171875 C-59.54899978637695,56.48699951171875 -59.54899978637695,-56.64899826049805 -59.54899978637695,-56.64899826049805 C-59.54899978637695,-56.64899826049805 -45.40999984741211,-56.64899826049805 -45.40999984741211,-56.64899826049805 C-45.40999984741211,-56.64899826049805 17.03700065612793,5.797999858856201 17.03700065612793,5.797999858856201 C17.03700065612793,5.797999858856201 17.03700065612793,-56.49100112915039 17.03700065612793,-56.49100112915039 C17.03700065612793,-56.49100112915039 44.685001373291016,-56.49100112915039 44.685001373291016,-56.49100112915039z"
                    />
                  </g>
                </g>
                <g
                  style={{ display: "block" }}
                  transform="matrix(0.3799999952316284,0,0,0.3799999952316284,138.94895935058594,22.5)"
                  opacity={1}
                >
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      fillOpacity={1}
                      d=" M138.26100158691406,38.053001403808594 C138.26100158691406,38.053001403808594 93.13400268554688,38.053001403808594 93.13400268554688,38.053001403808594 C93.13400268554688,38.053001403808594 84.87000274658203,56.48699951171875 84.87000274658203,56.48699951171875 C84.87000274658203,56.48699951171875 54.36199951171875,56.48699951171875 54.36199951171875,56.48699951171875 C54.36199951171875,56.48699951171875 106.3219985961914,-56.64899826049805 106.3219985961914,-56.64899826049805 C106.3219985961914,-56.64899826049805 125.072998046875,-56.64899826049805 125.072998046875,-56.64899826049805 C125.072998046875,-56.64899826049805 177.03399658203125,56.48699951171875 177.03399658203125,56.48699951171875 C177.03399658203125,56.48699951171875 146.52499389648438,56.48699951171875 146.52499389648438,56.48699951171875 C146.52499389648438,56.48699951171875 138.26100158691406,38.053001403808594 138.26100158691406,38.053001403808594z M101.55699920654297,15.649999618530273 C101.55699920654297,15.649999618530273 129.9969940185547,15.649999618530273 129.9969940185547,15.649999618530273 C129.9969940185547,15.649999618530273 123.48400115966797,0.39399999380111694 123.48400115966797,0.39399999380111694 C123.48400115966797,0.39399999380111694 115.85800170898438,-21.691999435424805 115.85800170898438,-21.691999435424805 C115.85800170898438,-21.691999435424805 108.06999969482422,0.39399999380111694 108.06999969482422,0.39399999380111694 C108.06999969482422,0.39399999380111694 101.55699920654297,15.649999618530273 101.55699920654297,15.649999618530273z"
                    />
                  </g>
                </g>
                <g
                  style={{ display: "block" }}
                  transform="matrix(0.3799999952316284,0,0,0.3799999952316284,138.93914794921875,22.5)"
                  opacity={1}
                >
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      fillOpacity={1}
                      d=" M306.9930114746094,-56.64899826049805 C306.9930114746094,-56.64899826049805 306.9930114746094,56.48699951171875 306.9930114746094,56.48699951171875 C306.9930114746094,56.48699951171875 279.82000732421875,56.48699951171875 279.82000732421875,56.48699951171875 C279.82000732421875,56.48699951171875 279.82000732421875,2.303999900817871 279.82000732421875,2.303999900817871 C279.82000732421875,2.303999900817871 251.85499572753906,37.736000061035156 251.85499572753906,37.736000061035156 C251.85499572753906,37.736000061035156 242.1649932861328,37.736000061035156 242.1649932861328,37.736000061035156 C242.1649932861328,37.736000061035156 214.1959991455078,2.621000051498413 214.1959991455078,2.621000051498413 C214.1959991455078,2.621000051498413 214.1959991455078,56.48699951171875 214.1959991455078,56.48699951171875 C214.1959991455078,56.48699951171875 187.0279998779297,56.48699951171875 187.0279998779297,56.48699951171875 C187.0279998779297,56.48699951171875 187.0279998779297,-56.64899826049805 187.0279998779297,-56.64899826049805 C187.0279998779297,-56.64899826049805 201.48699951171875,-56.64899826049805 201.48699951171875,-56.64899826049805 C201.48699951171875,-56.64899826049805 247.08999633789062,1.5069999694824219 247.08999633789062,1.5069999694824219 C247.08999633789062,1.5069999694824219 292.5329895019531,-56.64899826049805 292.5329895019531,-56.64899826049805 C292.5329895019531,-56.64899826049805 306.9930114746094,-56.64899826049805 306.9930114746094,-56.64899826049805z"
                    />
                  </g>
                </g>
                <g
                  style={{ display: "block" }}
                  transform="matrix(0.3799999952316284,0,0,0.3799999952316284,138.9319610595703,22.5)"
                  opacity={1}
                >
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      fillOpacity={1}
                      d=" M322.7030029296875,0.07699999958276749 C322.7030029296875,-34.5629997253418 347.3330078125,-58.87200164794922 383.8789978027344,-58.87200164794922 C420.1080017089844,-58.87200164794922 445.2170104980469,-35.03900146484375 445.2170104980469,0.07699999958276749 C445.2170104980469,34.558998107910156 420.7460021972656,58.87200164794922 383.8789978027344,58.87200164794922 C347.97100830078125,58.87200164794922 322.7030029296875,35.034000396728516 322.7030029296875,0.07699999958276749z M415.97601318359375,0.07699999958276749 C415.97601318359375,-19.465999603271484 403.4259948730469,-32.8120002746582 383.8789978027344,-32.8120002746582 C364.9700012207031,-32.8120002746582 351.94000244140625,-19.78700065612793 351.94000244140625,0.07699999958276749 C351.94000244140625,19.46500015258789 364.4949951171875,32.8120002746582 383.8789978027344,32.8120002746582 C403.1090087890625,32.8120002746582 415.97601318359375,19.781999588012695 415.97601318359375,0.07699999958276749z"
                    />
                  </g>
                </g>
                <g
                  style={{ display: "block" }}
                  transform="matrix(0.3799999952316284,0,0,0.3799999952316284,138.93255615234375,22.5)"
                  opacity={1}
                >
                  <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                    <path
                      fillOpacity={1}
                      d=" M565.1649780273438,-56.49100112915039 C565.1649780273438,-56.49100112915039 565.1649780273438,56.80400085449219 565.1649780273438,56.80400085449219 C565.1649780273438,56.80400085449219 550.864013671875,56.80400085449219 550.864013671875,56.80400085449219 C550.864013671875,56.80400085449219 488.5790100097656,-5.802000045776367 488.5790100097656,-5.802000045776367 C488.5790100097656,-5.802000045776367 488.5790100097656,56.48699951171875 488.5790100097656,56.48699951171875 C488.5790100097656,56.48699951171875 460.9309997558594,56.48699951171875 460.9309997558594,56.48699951171875 C460.9309997558594,56.48699951171875 460.9309997558594,-56.64899826049805 460.9309997558594,-56.64899826049805 C460.9309997558594,-56.64899826049805 475.07000732421875,-56.64899826049805 475.07000732421875,-56.64899826049805 C475.07000732421875,-56.64899826049805 537.5170288085938,5.797999858856201 537.5170288085938,5.797999858856201 C537.5170288085938,5.797999858856201 537.5170288085938,-56.49100112915039 537.5170288085938,-56.49100112915039 C537.5170288085938,-56.49100112915039 565.1649780273438,-56.49100112915039 565.1649780273438,-56.49100112915039z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-5">
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
          <div className="border-2 relative border-white rounded-full h-11 w-11 mx-4 flex items-center justify-center">
            <div
              aria-label="Play"
              offset="0"
              class="css-18deho8 eqnon3u2"
            ></div>
          </div>
          <Button>Contact us</Button>
        </div>
      </div>
    </nav>
  );
}
