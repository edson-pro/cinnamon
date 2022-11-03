import React from "react";
import BlogCard from "../cards/blog";
import Chevron from "../icons/Chevron";

export default function Blog() {
  return (
    <div className="bg-white  pt-0 lg:pt-16 py-16 relative">
      <div className="max-w-6xl mx-auto  px-5">
        <h4 className="lg:text-5xl text-4xl my-6 leading-[50px] md:leading-[60px] font-MontBold ">
          Stay in the loop <br /> on tech topics
        </h4>
      </div>
      <div className="max-w-6xl my-10 mx-auto no-scrollbar overflow-x-scroll md:overflow-x-auto w-screen md:w-auto flex md:grid grid-cols-3 gap-8 px-5">
        <BlogCard
          image={
            "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F4z4OPjERGBRoMzBhMFKHPE%2Fd29f2e92e90c78f6427c1eba8517b9ae%2FFreelance_VS._Agency_blog_illustration.png&w=1920&q=75"
          }
          author={"Matija Bermanec & Lorena Ujević"}
          title="Differences in Hiring an Agency vs. Freelancers 2.0"
          date="2022-10-13"
          time="6min"
          category="Sales"
        />{" "}
        <BlogCard
          image={
            "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F3zWnPZ05ZNw8AmNrhgFfW%2Fd74e0c4a8f8a8a117bbb3094fc296284%2FFlutter_Template.png&w=1920&q=75"
          }
          author={"Samantha Holstead"}
          title="Cinnamon Flutter Template Overview"
          date="2022-10-13"
          time="3min"
          category="DEVELOPMENT"
        />{" "}
        <BlogCard
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
      <div className="max-w-6xl mx-auto  px-5">
        <a className="text-primary font-MontBold flex  items-center gap-4 ">
          <Chevron />
          <span className="leading-7 border-b-[1.5px] border-primary">
            VIEW CASE STUDY
          </span>
        </a>
      </div>
    </div>
  );
}
