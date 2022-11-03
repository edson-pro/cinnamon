import React from "react";
import BlogCard from "../cards/blog";
import Chevron from "../icons/Chevron";

export default function Blog() {
  return (
    <div className="bg-white  pt-0 lg:pt-16 py-16 relative">
      <div className="max-w-6xl mx-auto  px-5">
        <h4 className="lg:text-5xl text-4xl my-6 leading-3.125 md:leading-3.75 font-MontBold ">
          Stay in the loop <br /> on tech topics
        </h4>
      </div>
      <div className="max-w-6xl my-10 mx-auto no-scrollbar overflow-x-scroll md:overflow-x-auto w-screen md:w-auto flex md:grid grid-cols-3 gap-8 px-5">
        <BlogCard
          image={"/images/Freelance_VS.webp"}
          author={"Matija Bermanec & Lorena Ujević"}
          title="Differences in Hiring an Agency vs. Freelancers 2.0"
          date="2022-10-13"
          time="6min"
          category="Sales"
        />{" "}
        <BlogCard
          image={"/images/Flutter_Template.webp"}
          author={"Samantha Holstead"}
          title="Cinnamon Flutter Template Overview"
          date="2022-10-13"
          time="3min"
          category="DEVELOPMENT"
        />
        <BlogCard
          image={"/images/Tinder_blog.webp"}
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
          <span className="leading-7 border-b-[.0938rem] border-primary">
            VIEW CASE STUDY
          </span>
        </a>
      </div>
    </div>
  );
}
