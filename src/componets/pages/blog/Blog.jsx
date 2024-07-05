import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import "./blog.scss";
import Carousel from "../../carousel/Carousel";
import BlogFrured from "../../fearured/blogFrured/BlogFrured";

function Blog() {
  return (
    <div>
      <Navbar />

      <div className="main-blog">
        <div className="info-blog">
          <div className="box-info">
            <div className="item">
              <Carousel />
            </div>
            <BlogFrured />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Blog;
