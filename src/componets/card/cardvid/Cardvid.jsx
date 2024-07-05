import React from "react";
import video from "../../../imge/istockphoto-1743225414-640_adpp_is.mp4";
import "./cardvid.scss";
function cardvid({ rotate }) {
  return (
    <>
      {rotate ? (
        <div className="videoItem" style={{ rotate: "180deg" }}>
          <video className="video-blog" autoPlay loop muted src={video}></video>
        </div>
      ) : (
        <div className="videoItem">
          <video className="video-blog" autoPlay loop muted src={video}></video>
        </div>
      )}
    </>
  );
}

export default cardvid;
