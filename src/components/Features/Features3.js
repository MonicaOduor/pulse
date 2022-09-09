import React from "react";
import { Container, Row } from "react-bootstrap";
import svg from "../images/Features _ Pulse-3.svg";

export default function Features2() {
  return (
    <Container>
      <br />
      <br />
      <Row>
        <p className="col-lg-1 "></p>
        <h2 className="col-lg-4 text-md-center col-md-5 col-sm-12 features-section-2">
          <strong>
            Visualize your
            <br className="d-md-block d-lg-block d-sm-none" /> income and
            expenses.
          </strong>
          <br />
        </h2>

        <img className="col-lg-6 col-md-7 col-sm-12" src={svg} alt="graph" />
      </Row>
      <Row>
        <p className="col-lg-4 col-md-6 col-sm-12">
          <strong>Track you cash flow over any time range</strong>
          <br />
          Monitor your cash flow by week, month, or custom date range. Check
          your cash on hand at the beginning of each month and view each day’s
          incoming and outgoing funds.
        </p>
        <p className="col-lg-4 col-md-6 col-sm-12">
          <strong>Organize cash flow into categories</strong>
          <br />
          Know where your money’s coming from and going.
        </p>
        <p className="col-lg-4 col-md-6 col-sm-12">
          <strong>Group cash flow by customer</strong>
          <br />
          Know who your best (and worst) customers will be.
        </p>
        <p className="col-lg-4 col-md-6 col-sm-12">
          <strong>Group cash flow by project</strong>
          <br />
          Quickly measure potential profitability on a project basis.
        </p>
      </Row>
    </Container>
  );
}
