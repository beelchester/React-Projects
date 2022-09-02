import React from 'react';
import '../../styles/LinkedIn.css'
import linkedinLogo from "../../assets/linkedin.png"
export default function Linkedin(){
  return(
    <a href='https://www.linkedin.com/in/sahil-yeole-15b813137/' target="_blank"  className="linkedin">
      <img src={linkedinLogo} />
    <p>LinkedIn</p>
  </a>
)
}