import Head from "next/head";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import Button from "../components/ui/Button";
import AgileTeam from "../components/sections/AgileTeam";
import Blog from "../components/sections/Blog";
import College from "../components/sections/College";
import Hero from "../components/sections/hero";
import Offices from "../components/sections/Offices";
import Positions from "../components/sections/Positions";
import Products from "../components/sections/Products";
import Services from "../components/sections/Services";
import Testimonies from "../components/sections/Testimonies";
import WhoWeAre from "../components/sections/WhoWeAre";
import WorkTogether from "../components/sections/WorkTogether";
export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Products />
      <Services />
      <AgileTeam />
      <Testimonies />
      <WhoWeAre />
      <College />
      <Positions />
      <Offices />
      <Blog />
      <WorkTogether />
    </Fragment>
  );
}
