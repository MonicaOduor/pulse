import React from "react";
import { Container, Row } from "react-bootstrap";
import svg from "../images/Features _ Pulse-5.svg";

export default function Features2() {
  return (
    <Container>
      <br />
      <br />
      <Row>
        <p className="col-lg-1 "></p>
        <h2 className="col-lg-4 text-md-center col-md-5 col-sm-12 features-section-2">
          <strong>
          Share your
            <br className="d-md-block d-lg-block d-sm-none" /> projections.
          </strong>
          <br />
        </h2>

        <img className="col-lg-6 col-md-7 col-sm-12" src={svg} alt="graph" />
      </Row>
      <Row>
        <p className="col-lg-4 col-md-6 col-sm-12">
          <strong>Invite collaborators</strong>
          <br />
          Share the work load with your team by inviting them to manage cash flow with you.
        </p>
        <p className="col-lg-4 col-md-6 col-sm-12">
          <strong>Share with investors</strong>
          <br />
          We offer read-only access so you can share cash flow projections with people who don’t need to make changes.
        </p>
        <p className="col-lg-4 col-md-6 col-sm-12">
          <strong>Attach files</strong>
          <br />
          Include proposals, invoices and contracts with transactions to audit or help evaluate income and expenses.
        </p>
        <p className="col-lg-4 col-md-6 col-sm-12">
          <strong>Export data and print reports</strong>
          <br />
          Easily export your cash flow data from Pulse to a CSV file.
        </p>
      </Row>
    </Container>
  );
}
