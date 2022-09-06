import React from "react";
import Header from "./Header";
import Meme from "./Meme";
import "../styles/Frame.css"
export default function Frame(props) {
  return <div className="frame">
    <Header/>
    <Meme/>
  </div>;
}
