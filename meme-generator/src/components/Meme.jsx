import React, { useState, useEffect } from "react";
import "../styles/Meme.css";
import "../styles/Button.css";

export default function Meme() {
  const [allMemes, setAllMemes] = React.useState([{
    "id": "79132341",
    "name": "Bike Fall",
    "url": "https://i.imgflip.com/1b42wl.jpg",
    "width": 500,
    "height": 680,
    "box_count": 3
  }]);
  React.useLayoutEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });


  function getMemeImage() {

    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
useEffect(() => {

 getMemeImage()
}, [])


  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
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
            onChange={handleChange}
          />
          <input
            className="inputs"
            type="text"
            id="inp2"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <div className="button-body">
          <button className="button" type="button" onClick={getMemeImage}>
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
