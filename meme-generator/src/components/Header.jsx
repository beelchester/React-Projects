import React from "react";
import"../styles/Header.css"
import image from "../assets/troll-face.png"
export default function Header(props) {
  return <div className="header">
    <img src={image} className="img"/>
    <h2>Meme Generator</h2>
  </div>;
}
