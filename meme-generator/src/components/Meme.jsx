import React, { useState } from "react";
import "../styles/Meme.css";
import "../styles/Button.css";
import memesData from "../memesData";
export default function Meme(props) {
  const memesArray = memesData.data.memes;
  const randomNum = Math.floor(Math.random() * memesArray.length);
  let url = memesArray[randomNum].url;

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: url,
  });
  const [imageUrl, setImageUrl] = useState("");

  function changeHandler(event) {
    const { name, value } = event.target;
    setMeme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function clickHandler() {
    setImageUrl(url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    console.log(meme);
  }

  return (
    <div className="meme">
      <form className="form">
        <div className="inp-container">
          <input
            className="inputs"
            type="text"
            id="inp1"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={changeHandler}
          />
          <input
            className="inputs"
            type="text"
            id="inp2"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={changeHandler}
          />
        </div>
        <div className="button-body">
          <button className="button" type="button" onClick={clickHandler}>
            Get a new meme image
          </button>
        </div>
        <div className="img-container">
          <img src={meme.randomImage} className="meme-image" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </form>
    </div>
  );
}
