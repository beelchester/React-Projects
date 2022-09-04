import React from "react";
import grid from "/assets/photo-grid.png";
import "../styles/Hero.css";
export default function Hero() {
  return (
    <div className="hero">
      <div className="imageContainer">
      <img src={grid} />
      </div>
      <div className="textContainer">
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
      </div>
    </div>
  );
}
