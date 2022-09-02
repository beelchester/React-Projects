import React from "react";
import "../styles/Footer.css";
import twitLogo from "../assets/Twitter Icon.png";
import instLogo from "../assets/instagram.png";
import gitLogo from "../assets/github.png";
export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/sahilyeole"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gitLogo} />
      </a>
      <a href="https://twitter.com/sahil46y" target="_blank">
      <img src={twitLogo} />
      </a>
      <a href="https://" target="_blank">
      <img src={instLogo} />
      </a>
    </div>
  );
}
