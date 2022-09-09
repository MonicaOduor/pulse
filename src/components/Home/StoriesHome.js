import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../images/6.png";

export default function StoriesHome() {
  return (
    <Container>
      <br />
      <br />
      <br />
      <Row>
        <div className="text-center col-lg-7">
          <h1 className="p-5">
            <strong>
              Pulse is the easy, online way to manage and project your cash
              flow.
            </strong>
          </h1>
          <Link to="/stories">
            <button className="btn btn-outline-success rounded-0 signup_btn">
              See All Customer Stories
            </button>
          </Link>
          <br />
          <br />
        </div>

        <div
          className="card text-center col-lg-5 pt-2 rounded-0"
          style={{ color: "#00ad6a" }}
        >
          <img
            className="card-img-top img-responsive center-block img-fluid"
            src={img}
            alt="img"
            style={{
              borderRadius: "50%",
              width: "100px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <div className="card-body">
            <p>
              “Pulse has allowed us to visualize our cash flow before our brains
              turned to mush trying to deal with receipts, spreadsheets and
              accordion folders.”
            </p>
            <small className="text-secondary">
              CASIMIR LOEBER, REALTY NINJA
              <br />
            </small>
            <a href="#!" style={{ color: "#00ad6a" }}>
              Read Customer Story→
            </a>
          </div>
        </div>
      </Row>
      <br />
      <br />
    </Container>
  );
}
