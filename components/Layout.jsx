import React, { Fragment } from "react";
import Footer from "./layout/Footer";
import Navabar from "./layout/Navabar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Navabar />
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
}
