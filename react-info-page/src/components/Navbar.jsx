import React from "react";
import "../styles/Navbar.css"
import logo from "../assets/react-icon-small.png"

export default function Navbar() {
  return (
    <nav className="navbar">
    <img src={logo}/>
    <h1>ReactFacts</h1>
    <h3>React Project </h3>
    </nav>
  );
}
