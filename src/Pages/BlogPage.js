import React from "react";
import blog1 from "../img/blogs/blog1.svg";
import blog2 from "../img/blogs/blog2.svg";
import blog3 from "../img/blogs/blog3.svg";
import blog4 from "../img/blogs/blog4.svg";
import blog5 from "../img/blogs/blog5.svg";
import Title from "../Components/Title";

function BlogPage() {
  return (
    <>
      <div className="blog-title">
        <Title title={"Blogs"} span={"Blogs"} />
      </div>
      <div className="BlogPage">
        <div className="blog">
          <div className="blog-content">
            <img src={blog1} alt="" />
            <a href={blog1} className="blog-link" target="blank">
              Check me at
            </a>
            <div className="date-con"></div>
          </div>
        </div>
        <div className="blog">
          <div className="blog-content">
            <img src={blog2} alt="" />
            <a href={blog2} className="blog-link" target="blank">
              Check me at
            </a>
            <div className="date-con"></div>
          </div>
        </div>
        <div className="blog">
          <div className="blog-content">
            <img src={blog3} alt="" />
            <a href={blog3} className="blog-link" target="blank">
              Check me at
            </a>
            <div className="date-con"></div>
          </div>
        </div>
        <div className="blog">
          <div className="blog-content">
            <img src={blog4} alt="" />
            <a href={blog4} className="blog-link" target="blank">
              Check me at
            </a>
            <div className="date-con"></div>
          </div>
        </div>
        <div className="blog">
          <div className="blog-content">
            <img src={blog5} alt="" />
            <a href={blog5} className="blog-link" target="blank">
              Check me at
            </a>
            <div className="date-con"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
