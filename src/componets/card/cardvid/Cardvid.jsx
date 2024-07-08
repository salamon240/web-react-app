import React from "react";
import video from "../../../imge/6725000-uhd_2160_3840_25fps.mp4";
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
