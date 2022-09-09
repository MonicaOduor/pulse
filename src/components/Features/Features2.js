import React from "react";
import { Container, Row } from "react-bootstrap";
import svg from "../images/Features _ Pulse-2.svg";

export default function Features2() {
  return (
    <div className="bg-white container-fluid">
      <Row>
        <h2 className="col-lg-5 text-md-center col-md-5 col-sm-12 features-section-2">
          <strong>
            Manage your
            <br className="d-md-block d-lg-block d-sm-none" /> cash flow.
          </strong>
          <br />
        </h2>

        <img className="col-lg-7 col-md-7 col-sm-12" src={svg} alt="graph" />
      </Row>
      <Container>
        <Row>
          <p className="col-lg-4 col-md-6 col-sm-12">
            <strong>Enter your cash flow projections</strong>
            <br />
            Add single income or expenses to your cash flow for complete
            control.
          </p>
          <p className="col-lg-4 col-md-6 col-sm-12">
            <strong>Automate recurring entries</strong>
            <br />
            Reduce manual entry with powerful recurring income and expense
            logic.
          </p>
          <p className="col-lg-4 col-md-6 col-sm-12">
            <strong>View Detailed Transactions</strong>
            <br />
            Add multiple lines to a single item to make your cash flow easy to
            understand.
          </p>
          <p className="col-lg-4 col-md-6 col-sm-12">
            <strong>Adjust past transactions</strong>
            <br />
            If something needs to be edited, you can do that to any entry, at
            any time.
          </p>
          <p className="col-lg-4 col-md-6 col-sm-12">
            <strong>Dial in growth and expense curves </strong>
            <br />
            Anticipating some growth? Pulse can automate that, too.
          </p>
          <p className="col-lg-4 col-md-6 col-sm-12">
            <strong>Play with scenarios</strong>
            <br />
            Quickly see what would happen to your bottom line by toggling income
            and expenses on and off.
          </p>
        </Row>
      </Container>
    </div>
  );
}
