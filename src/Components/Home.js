import React from "react";
import pic from "../pics/shira2.jpg";

const Home = () => {
  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        ...טאב בהכנה
      </div>
      <img src={pic} alt="XXX" className="picBig" />
    </div>
  );
};

export default Home;
