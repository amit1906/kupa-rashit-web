import React from "react";
import pic from "../pics/ramzi1.jpg";

const Characters = () => {
  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        ...טאב בהכנה
      </div>
      <img src={pic} className="picBig" />
    </div>
  );
};

export default Characters;
