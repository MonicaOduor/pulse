import React from "react";
import Navigation from "../Navigation";
import { Container} from "react-bootstrap";
import Footer from "../Footer";
import Content from "./Content";

export default function Blog() {
  return (
    <>
      <Navigation />

      <Container>
        <Content />
      </Container>
      <br />

      <Footer />
    </>
  );
}
