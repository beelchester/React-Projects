import React from "react";
import Header from "./Header";
import Button from "./Button";
import "../styles/Frame.css"
export default function Frame(props) {
  return <div className="frame">
    <Header/>
    <Button/>
  </div>;
}
