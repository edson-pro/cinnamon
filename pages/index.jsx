import Head from "next/head";
import Link from "next/link";
import { Fragment, useState } from "react";
import Button from "../components/Button";
export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>NEAR dev 101</title>
        <meta
          name="description"
          content="Get NEAR Certified with NEAR Balkans and Dacade."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-[#1C1C1C] hero relative w-full ">
        <div className="py-40 relative z-20 max-w-6xl mx-auto px-3">
          <div className="">
            <h4 className="text-[80px] leading-[108px] font-MontHeavy font-extrabold text-white">
              Trick or treat design & development agency.
            </h4>
            <p className="max-w-2xl my-6 leading-9 text-gray-300 text-lg">
              Extend your team with our high performing specialists or hire us
              to shape your product from scratch. Either way, we’ll get your
              product off the ground and build a momentum for your success.
            </p>
          </div>
        </div>
        {/* <div className="absolute top-0 h-full w-full">
          <img
            className="absolute bottom-[20%] right-[40%] w-[140px] h-[60px] "
            src="/images/big_eye.svg"
            alt=""
          />
          <img
            className="absolute bottom-[7%] right-[35%] w-[80px] h-[33px]"
            src="/images/big_eye.svg"
            alt=""
          />
          <img
            className="absolute bottom-[25%] right-[23%] w-[180px] h-[83px]"
            src="/images/big_eye.svg"
            alt=""
          />
          <img
            className="absolute bottom-[20%] right-[40%] w-[140px] h-[63px]"
            src="/images/big_eye.svg"
            alt=""
          />
          <img
            className="absolute bottom-[42%] right-[10%] w-[140px] h-[63px]"
            src="/images/big_eye.svg"
            alt=""
          />
          <img
            className="absolute bottom-[35%] right-[2%] w-[80px] h-[33px]"
            src="/images/big_eye.svg"
            alt=""
          />{" "}
          <img
            className="absolute bottom-[7%] right-[2%] w-[180px] h-[83px]"
            src="/images/big_eye.svg"
            alt=""
          />
        </div> */}
      </div>
      <div>
        <ProductSection
          color={"#91F1C3"}
          image={
            "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F281NSZSG7VvkxHDig0qbBA%2F70ac7de86b0bb84190916ee9aac33aa7%2FMockup_1.png&w=1920&q=80"
          }
          description={
            "Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."
          }
          tags={["QUALITY ASSURANCE", "PRODUCT DESIGN"]}
        />
        <ProductSection
          color={"#52247F"}
          image={
            "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F14zPgk0p1qf0yptSYRjHBW%2F94e47560492e6602f69d9ee91be4ab61%2FFiona_Thumbnail.png&w=1920&q=80"
          }
          description={
            "Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
          }
          tags={["PRODUCT DESIGN", "WEB DEVELOPMENT"]}
        />
        <ProductSection
          color={"#FFCB49"}
          image={
            "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F7kFgIXzEEYLIM678mr3mzo%2F6401985a011c0ae2ce0b3f940499f4c1%2Fthumbnail.png&w=1920&q=80"
          }
          description={
            "Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website."
          }
          tags={["PRODUCT DESIGN", "WEB DEVELOPMENT", "QUALITY ASSURANCE"]}
        />
      </div>
      <div className="bg-[#1C1C1C] hero py-28 ">
        <div className="max-w-6xl gap-5 py-10 mx-auto px-3 grid grid-cols-5">
          <div className="col-span-2">
            <h4 className="text-5xl text-white leading-[50px] font-MontHeavy ">
              Our services
            </h4>
          </div>
          <div className="col-span-3">
            <div className=" grid grid-cols-2 gap-20">
              <ServiceItem
                image={
                  "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-design.cdb049ad.png&w=96&q=75"
                }
                description={
                  "Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes."
                }
                title={"Product design"}
              />{" "}
              <ServiceItem
                image={
                  "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdevelopment.1440a123.png&w=96&q=75"
                }
                description={
                  "By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
                }
                title={"Development"}
              />{" "}
              <ServiceItem
                image={
                  "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquality-assurance.9e7ba47b.png&w=96&q=75"
                }
                description={
                  "Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing."
                }
                title={"Quality assurance"}
              />{" "}
              <ServiceItem
                image={
                  "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing-and-growth.35184bb3.png&w=96&q=75"
                }
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
      <div className="bg-[#F6F6F6] py-40 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 px-3">
          <div>
            <h4 className="text-5xl leading-[50px] font-MontHeavy ">
              Agile team <br />
              on demand
            </h4>
          </div>
          <div>
            <p className="max-w-md text-gray-500 text-opacity-80 text-base leading-7 my-3">
              By hiring and managing talented people with skills specific to
              your project, we build you a team that’s accomplished, agile and
              scalable in both directions.
            </p>
            <div className="my-6">
              <Button>See How It works</Button>
            </div>
          </div>
        </div>
        <img
          className="absolute max-w-xs right-0 bottom-0"
          src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fagile-team-on-demand.316271d9.png&w=750&q=75"
          alt=""
        />
      </div>
      <div className="relative py-28">
        <div className="font-MontHeavy absolute text-[#5135ff1a] text-[258px] top-[0px] left-[0px]">
          “
        </div>
        <div className="max-w-5xl mx-auto px-3 grid grid-cols-6 ">
          <div className="col-span-4">
            <div>
              {" "}
              <h4 className="text-4xl leading-[50px] font-MontHeavy ">
                They’re consistent, and the communication is good.
              </h4>
              <p className="max-w-2xl text-gray-500 text-opacity-80 text-base leading-7 my-5">
                When I have a deadline, they would work extra hours on the
                weekend and after hours. Cinnamon gives the impression of being
                a smaller team that’s focused on customers.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4">
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
            <div className="flex my-10 items-center gap-9">
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
          <div className="col-span-2 flex-col flex items-end justify-between">
            <img
              className="w-52 h-16"
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
      <div className="bg-[#F6F6F6] py-32 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-5 gap-8 px-3">
          <div className="col-span-3">
            <h4 className="text-5xl leading-[50px] font-MontHeavy ">
              Who we are
            </h4>
            <p className="max-w-md text-gray-500 text-opacity-80 text-base leading-7 my-3">
              Meet our international teams made up of 86 innovators, branched
              into 8 departments, that influence the market throughout 20
              different countries.
            </p>
            <div className="grid my-12 grid-cols-2 gap-10">
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
          <div className="col-span-2">
            <img
              className="absolute right-0 max-w-xs"
              src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwho-we-are.db3b807b.png&w=1080&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-16 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10 px-3">
          <div className="p-7 col-span-1">
            <img
              src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcinn-college.70bf2057.png&w=1920&q=75"
              alt=""
            />
          </div>
          <div className="col-span-2 p-8">
            <p className="max-w-sm text-gray-700 text-opacity-80 text-base leading-7 my-3">
              Seize the unique opportunity to participate in a wide range of
              courses conducted by professionals with an impeccable reputation
              in the digital industry.
            </p>

            <div className="my-6">
              <Button>See How It works</Button>
            </div>
          </div>
        </div>
        <img
          className="absolute max-w-sm right-0 bottom-0"
          src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcinn-college-illustration.180f68e4.png&w=1200&q=75"
          alt=""
        />
      </div>
      <div className="bg-[#1C1C1C] hero py-28 ">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 px-3">
          <div>
            <h4 className="text-5xl my-6 text-white leading-[50px] font-MontHeavy ">
              We’re growing
            </h4>
            <p className="max-w-md text-gray-200 text-opacity-80 text-base leading-7 my-3">
              Jump on board with Cinnamon and get the privilege of working on
              challenging projects for leading global companies! Make the world
              a better, more connected place.
            </p>

            <div className="my-6">
              <Button>See All Posaitions</Button>
            </div>
          </div>
          <div>
            {[
              "Android Developer",
              "Android Developer",
              "Backend Development Team Lead",
            ].map((e) => {
              return (
                <div className="flex items-center justify-between py-5 border-b border-b-gray-200 border-opacity-10">
                  <h4 className="font-MontBold max-w-xs text-xl leading-9 text-white">
                    {e}
                  </h4>
                  <a href="">
                    <img
                      src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FarrowRightWhite.ec432a63.png&w=48&q=75"
                      alt=""
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-white py-16 relative">
        <div className="max-w-6xl mx-auto  px-3">
          <h4 className="text-5xl my-6 leading-[50px] font-MontHeavy ">
            Our offices
          </h4>
        </div>
        <div className="max-w-6xl my-10 mx-auto grid grid-cols-2 gap-10 px-3">
          <OfiiceItem
            image={
              "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzagreb.b5180ce4.jpeg&w=1200&q=75"
            }
            description={"Slavonska avenija 6, 10000, Zagreb, Croatia"}
            title={"Zagreb"}
          />
          <OfiiceItem
            image={
              "https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnew-york.4d639475.jpeg&w=1200&q=75"
            }
            description={"500 7th Ave, New York, NY 10018, United States"}
            title={"New York"}
          />
        </div>
        <div className="flex max-w-6xl mx-auto  px-3 my-10 items-center gap-9">
          <a href="">
            <img
              className="w-[48px] grayscale h-[27px]"
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

      <div className="bg-white py-16 relative">
        <div className="max-w-6xl mx-auto  px-3">
          <h4 className="text-5xl my-6 leading-[60px] font-MontBold ">
            Stay in the loop <br /> on tech topics
          </h4>
        </div>
        <div className="max-w-6xl my-10 mx-auto grid grid-cols-3 gap-8 px-3">
          <BlogItem
            image={
              "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F4z4OPjERGBRoMzBhMFKHPE%2Fd29f2e92e90c78f6427c1eba8517b9ae%2FFreelance_VS._Agency_blog_illustration.png&w=1920&q=75"
            }
            author={"Matija Bermanec & Lorena Ujević"}
            title="Differences in Hiring an Agency vs. Freelancers 2.0"
            date="2022-10-13"
            time="6min"
            category="Sales"
          />{" "}
          <BlogItem
            image={
              "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F3zWnPZ05ZNw8AmNrhgFfW%2Fd74e0c4a8f8a8a117bbb3094fc296284%2FFlutter_Template.png&w=1920&q=75"
            }
            author={"Samantha Holstead"}
            title="Cinnamon Flutter Template Overview"
            date="2022-10-13"
            time="3min"
            category="DEVELOPMENT"
          />{" "}
          <BlogItem
            image={
              "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F24GZhGCgX2qB0dHVfXOpPt%2F91d8876c0bc4ae8790cc8e6d61c66192%2FTinder_blog.png&w=1920&q=75"
            }
            author={"Jan Marin"}
            title="How Tinder Swindled User Experience"
            date="2022-10-13"
            time="6min"
            category="DESIGN"
          />
        </div>
        <div className="max-w-6xl mx-auto  px-3">
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

      <div className="bg-[#F6F6F6] py-28 relative">
        <div className="flex max-w-3xl flex-col mx-auto items-center justify-center px-3">
          <h4 className="text-5xl text-center leading-[70px] font-MontBold ">
            Have a project in mind?
            <br /> Let's work together.
          </h4>
          <div className="my-10">
            <Button>Contact us</Button>
          </div>
        </div>
        <img
          className="bottom-0 left-0 absolute max-w-md"
          src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjob-application.afe28cef.png&w=1080&q=75"
          alt=""
        />
      </div>
    </Fragment>
  );
}

function ProductSection({ color, image, description, title, tags }) {
  return (
    <div className="my-32 max-w-6xl mx-auto px-3">
      <div
        style={{ background: color }}
        className="bg-[#91F1C3] overflow-hidden group w-full"
      >
        <img
          src={image}
          className="group-hover:scale-105 transition-all duration-500"
          alt=""
        />
      </div>
      <div className="my-10">
        <div className="flex items-center my-3 text-gray-500 font-bold font-MontSemiBold text-sm gap-6">
          {tags.map((e, index) => {
            return <p key={index}>{e}</p>;
          })}
        </div>
        <h4 className="text-4xl leading-[50px] font-MontHeavy ">
          Corrily: Optimize prices <br /> to maximize revenue
        </h4>
        <p className="text-base max-w-2xl leading-8 text-gray-500 my-4">
          {description}
        </p>
      </div>
    </div>
  );
}
function ServiceItem({ image, description, title }) {
  return (
    <div>
      <img className="h-12 w-12" src={image} alt="" />
      <div className="mt-4">
        <h4 className="text-white text-lg font-MontHeavy">{title}</h4>
        <p className="text-white text-opacity-80 text-base leading-7 my-3">
          {description}
        </p>
      </div>
    </div>
  );
}
function OfiiceItem({ image, title, description }) {
  return (
    <div className="group cursor-pointer">
      <img src={image} alt="" />
      <div className="flex items-center gap-4">
        <svg
          className="stroke-current text-primary"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <div className=" cursor-pointer my-5">
          <h4 className="group-hover:text-primary my-2 font-MontBold text-lg">
            {title}
          </h4>
          <p className="group-hover:text-primary text-gray-600 ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
function BlogItem({ title, time, author, date, image, category }) {
  return (
    <div className="group cursor-pointer">
      <img src={image} alt="" />
      <div className="my-3">
        <span className="my-2 text-xs group-hover:text-primary transition-all uppercase font-MontBold">
          {category}
        </span>
        <div className="gap-4 my-3 flex items-center">
          <span className="text-sm  flex-1 truncate text-gray-500">
            {author}
          </span>
          <div className="w-2 h-2 rounded-full bg-yellow-500 mx-1" />
          <span className="text-sm text-gray-500">{date}</span>
          <div className="w-2 h-2 rounded-full bg-yellow-500 mx-1" />
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <h4 className="text-xl leading-8 transition-all group-hover:text-primary font-MontBold">
          {title}
        </h4>
      </div>
    </div>
  );
}
