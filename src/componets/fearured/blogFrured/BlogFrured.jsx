import React from "react";
import "./blogFrured.scss";

function BlogFrured() {
  return (
    <div className="item-blog">
      <h4>Stay up to date with our latest news</h4>
      <div className="btn-email">
        <input className="inputBtn" type="text" placeholder="Enter yout email address" />
        <button className="btnEmail" type="button" onClick={()=>{console.log("hii")}}>SUBSCRIBE</button>
      </div>
      <p>By submitting my email address, I agree to receive marketing emails, newsletters and updates.</p>
    </div>
  );
}

export default BlogFrured;
