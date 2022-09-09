import React from "react";
import { Container, Row } from "react-bootstrap";
import svg from "../images/Features _ Pulse-4.svg";

export default function Features2() {
  return (
    <div className="bg-white container-fluid">
      <br />
      <br />
      <br />
      <Row>
        <h2 className="col-lg-6 text-md-center col-md-6 col-sm-12 features-section-2">
          <strong>
            Connect your
            <br className="d-md-block d-lg-block d-sm-none" /> accounting
            software.
          </strong>
          <br />
        </h2>

        <img className="col-lg-5 col-md-5 col-sm-12" src={svg} alt="graph" />
      </Row>
      <Container>
        <Row>
          <p className="col-lg-4 col-md-6 col-sm-12">
            <strong>Quickbooks Online Integration</strong>
            <br />
            Sync at any time to get the latest transactions from QuickBooks
            Online.
          </p>
          <p className="col-lg-4 col-md-6 col-sm-12">
            <strong>Compare actuals and projections</strong>
            <br />
            By putting your accounting data right alongside your cash flow
            projections, you can compare your projections with your actual cash
            flow.
          </p>
          <p className="col-lg-4 col-md-6 col-sm-12">
            <strong>View Detailed Transactions</strong>
            <br />
            Add multiple lines to a single item to make your cash flow easy to
            understand.
          </p>
          <p className="col-lg-4 col-md-6 col-sm-12">
            <strong>Less manual entry and errors</strong>
            <br />
            With a direction connection, you don’t have to worry about messing
            anything up.
          </p>
        </Row>
      </Container>
    </div>
  );
}
