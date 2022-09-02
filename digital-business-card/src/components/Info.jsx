import React from "react";
import "../styles/Info.css";
import pic from "../assets/unnamed.png";
import Email from "./buttons/Email";
import Linkedin from "./buttons/Linkedin";
export default function Info() {
  return (
    <div className="info">
      <img src={pic} />
      <h1 className="name">Sahil Yeole</h1>
      <h3 className="profession">Frontend Developer</h3>
      <p>sahilyeole.website</p>
      <div className="buttons">
      <Email/>
      <Linkedin/>
      </div>
    </div>
  );
}
