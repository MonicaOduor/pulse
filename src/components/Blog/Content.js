import React, { useState } from "react";
import { Row } from "react-bootstrap";
import BlogData from "./BlogData";

export default function Content() {
  const [post, setPost] = useState(BlogData);
  const [filteredPosts] = useState([...post]);

  const filterPost = (categoryItem) => {
    const result = filteredPosts.filter((currData) => {
      return currData.category === categoryItem;
    });
    setPost([...result]);
  };

  return (
    <>
      <Row>
        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="blog-categories">
            <h1>
              <strong>Blog</strong>
            </h1>
            <h3 className="text-secondary">
              <strong>Categories</strong>
            </h3>
            <a href="#news" onClick={() => filterPost("News")}>
              News (1)
            </a>
            <br />
            <a href="#business" onClick={() => filterPost("Business")}>
              Business (1)
            </a>
            <br />
            <a href="#pro-tips" onClick={() => filterPost("pro tips")}>
              Pro Tips (2)
            </a>
            <br />
            <a href="#cash-flow" onClick={() => filterPost("Cash Flow Basics")}>
              Cash Flow Basics (2)
            </a>
            <br />
            <a
              href="#small-business"
              onClick={() => filterPost("small business")}
            >
              Small Business (4)
            </a>
            <br />
            <a
              href="#entrepreneurship"
              onClick={() => filterPost("Entrepreneurship")}
            >
              Entrepreneurship (2)
            </a>
            <br />
            <a
              href="#hustle-cash-flow"
              onClick={() => filterPost("Hustle & Cash Flow")}
            >
              Hustle & Cash Flow (1)
            </a>
            <br />
            <a
              href="#survive-thrive"
              onClick={() => filterPost("survive & thrive")}
            >
              Survive & Thrive (1)
            </a>
          </div>
        </div>

        <div className="col-lg-9 col-md-9 col-sm-12">
          <div className="blog-content">
            {post.map((item) => {
              const { id, title, category, content, imgUrl } = item;
              return (
                <div className="card" key={id}>
                  <img
                    src={imgUrl}
                    className="card-img-top img-fluid ml-2"
                    alt="blog img"
                  />

                  <small className="text-secondary">{category}</small>
                  <h5>
                    <strong>{title}</strong>
                  </h5>
                  <p className="">{content}</p>
                  <a href="#!" style={{ color: "#00b289" }}>
                    Read More →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </Row>
    </>
  );
}
