import React from "react";
import { Container} from "react-bootstrap";
import img1 from "../images/2.jpg";
import img2 from "../images/3.jpg";
import img3 from "../images/4.jpg";
import img4 from "../images/5.jpg";

export default function CaseStudy() {
  return (
    <Container>
      <h1 className="text-lg-center p-4 text-sm-block">
        <strong>
          See What Our Customers Are
          <br className="d-lg-block d-sm-none d-md-none" /> Saying About Pulse.
        </strong>
      </h1>

      <div className="case-study-grid">
        <div className="">
          <img
            className="card-img-top img-responsive center-block img-fluid"
            src={img1}
            alt="img"
          />
          <p>
            “Casimir Loeber from RealtyNinja tells us how Pulse takes the 'fear
            and stress out of cash flow projection and management.'”
          </p>
          <strong>
            HOW REALTYNINJA USES PULSE TO AVOID STRESS ABOUT CASH FLOW <br />
          </strong>
          <a href="#!!" style={{ color: "#00ad6a" }}>
            Read Case Study→
          </a>
        </div>

        <div className="">
          <img
            className="card-img-top img-responsive center-block img-fluid"
            src={img2}
            alt="img"
          />
          <p>
            “Pulse helps us monitor the heart-rate of our business and reconcile
            our monthly operational expenses.”
          </p>
          <br />
          <strong>
            HOW BOLDUNDERLINE USES PULSE TO STAY FINANCIALLY STRONG <br />
          </strong>
          <a href="#!" style={{ color: "#00ad6a" }}>
            Read Case Study→
          </a>
        </div>

        <div className="">
          <img
            className="card-img-top img-responsive center-block img-fluid"
            src={img3}
            alt="img"
          />
          <p>
            “Pulse gives the folks at nGen Works confidence in their cash flow.”
          </p>
          <br />
          <br />
          <strong>
            HOW NGEN WORKS USES PULSE TO MAKE BETTER BUSINESS DECISIONS <br />
          </strong>
          <a href="#!" style={{ color: "#00ad6a" }}>
            Read Case Study→
          </a>
        </div>

        <div className="">
          <img
            className="card-img-top img-responsive center-block img-fluid"
            src={img4}
            alt="img"
          />
          <p>
            “After using Pulse at his previous agency, Carl came back to Pulse
            because it gives him a feeling of control over his business.”
          </p>
          <strong>
            BUREAU OF DIGITAL USES PULSE TO CONTROL CASH FLOW <br />
          </strong>
          <a href="#!" style={{ color: "#00ad6a" }}>
            Read Case Study→
          </a>
        </div>
      </div>
    </Container>
  );
}
