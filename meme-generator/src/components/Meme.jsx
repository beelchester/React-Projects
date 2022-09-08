import React, {useState} from "react";
import "../styles/Meme.css"
import "../styles/Button.css";
import memesData from "../memesData"
export default function Meme(props) {

  const [imageUrl, setImageUrl] = useState("")  

  function clickHandler(){
    const memesArray = memesData.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    let url = memesArray[randomNum].url
    setImageUrl(url)
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
    <div className="img-container">
    <img src={imageUrl} className="meme-image"/>
    </div>
    </form>
  </div>;
}
