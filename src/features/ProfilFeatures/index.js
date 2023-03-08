import React from "react";
import profilImg from "../../assets/images/user.jpeg";
import photosIcon from "../../assets/icons/photos.svg";
import "./index.css";
function ProfilFeatures() {
  return (
    <div className="profilContainer">
      <div className="profileHeader">
        <div className="profilInfo">
          <div className="profilLeftBox">
            <img src={profilImg} />
          </div>
          <div className="profilRightBox">
            <h1>Anita Austvika
              <button className="editPhotoBtn">Edit profile photo</button>
            </h1>
            <p>Download free, beautiful high-quality photos curated by Anita</p>
          </div>
        </div>
        <div className="profilPhotosBox">
          <img src={photosIcon} />
          <p>Photos: 0</p>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default ProfilFeatures;
