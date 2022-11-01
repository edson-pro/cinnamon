import React, { Fragment } from "react";
import Footer from "./Footer";
import Navabar from "./Navabar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Navabar />
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
}
