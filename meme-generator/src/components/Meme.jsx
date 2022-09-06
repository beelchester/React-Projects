import React from "react";
import "../styles/Meme.css"
import "../styles/Button.css";
import memesData from "../memesData"
export default function Meme(props) {
  let url
  function clickHandler(){
    const memesArray = memesData.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    url = memesArray[randomNum].url
    console.log(url)
  }

  return <div className="meme">
    <form className="form">
      <div className="inp-container">
      <input className="inputs" type="text" id="inp1" placeholder="Top Text"/>
      <input className="inputs" type="text" id="inp2" placeholder="Bottom Text"/>
      </div>
      <div className="button-body">
      <button className="button" type="button" onClick={clickHandler}>Get a new meme image </button>
    </div>
    </form>
  </div>;
}
