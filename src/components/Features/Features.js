import React from "react";
import Navigation from "../Navigation";
import Features1 from "./Features1";
import Footer from "../Footer";
import Features2 from "./Features2";
import Features3 from "./Features3";
import Features4 from "./Features4";
import Signup from "./SignUp";
import Features5 from "./Features5";

export default function Features() {
  return (
    <div>
      <Navigation />
      <Features1 />
      <Features2 />
      <Features3 />
      <Signup />
      <Features4 />
      <Features5 />
      <Signup />
      <Footer />
    </div>
  );
}
