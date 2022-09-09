import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BlogPages() {
  return (
    <ul className="blog-pages d-flex justify-content-center">
      &lt;&nbsp;
      <li className="mx-1">
        <Link
          to="#"
          style={{ backgroundColor: "#00b289" }}
          className="pl-2 pr-2 text-white"
        >
          1
        </Link>
      </li>
      &nbsp;&nbsp;
      <li className="mx-1">
        <Link to="#2" style={{ color: "#00b289" }}>
          2
        </Link>
        &nbsp;&nbsp;
      </li>
      <li className="mx-1">
        <Link to="#3" style={{ color: "#00b289" }}>
          3
        </Link>
        &nbsp;&nbsp;
      </li>
      <li className="mx-1">
        <Link to="#4" style={{ color: "#00b289" }}>
          4
        </Link>
      </li>
      &nbsp; &gt;
    </ul>
  );
}
