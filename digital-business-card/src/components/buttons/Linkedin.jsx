import React from 'react';
import '../../styles/LinkedIn.css'
import linkedinLogo from "../../assets/linkedin.png"
export default function Linkedin(){
  return(
    <div className="linkedin">
      <img src={linkedinLogo} />
    <p>LinkedIn</p>
  </div>
)
}