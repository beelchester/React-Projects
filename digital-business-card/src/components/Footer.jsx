import React from 'react';
import '../styles/Footer.css'
import twitLogo from '../assets/Twitter Icon.png'
import instLogo from '../assets/instagram.png'
import gitLogo from '../assets/github.png'
export default function Footer(){
  return(
    <div className="footer">
      <img src={gitLogo} />
      <img src={twitLogo} />
      <img src={instLogo} />
    </div>
  )
}