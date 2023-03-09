import React from "react";
import "./index.css";
import ovnerAccount from "../../assets/images/user.jpeg";
import userImg from "../../assets/images/user.png";
import heart from "../../assets/icons/heart-solid.svg";
import angleDown from "../../assets/icons/angle-down-solid.svg";
function DetailFeatures() {
  return (
    <div className="detailContainer">
      <div className="detailHeader">
        <div className="imgOvner">
          <img src={ovnerAccount} />
          <p>Anita Austvika</p>
        </div>
        <div className="favIconBox">
          <img src={heart} />
        </div>
      </div>
      <div className="detailImgCard">
        <img src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3" />
      </div>
      <div className="detailInfoBox">
        <div className="imgAbout">
          <p>Published 2 days ago</p>
          <p>Like Quantity:327</p>
        </div>
        <div className="commantTitleBox">
          <h3>comments</h3>
          <img className="arrowIcon" src={angleDown} />
        </div>
        <div className="commentsBox">
          <div className="commentRight">
            <img src={userImg} />
          </div>
          <div className="commentLeft">
            <p>
              Antonio
              <span>Beautiful design</span>
            </p>
            <div>
              <p>1mo</p>
              <p>Reply</p>
              <p className="fav">
                <img src={heart} />4
              </p>
            </div>
          </div>
        </div>
        <div className="commentForm">
          <img src={ovnerAccount} />
          <input placeholder="Add a comment" />
        </div>
      </div>
    </div>
  );
}

export default DetailFeatures;
