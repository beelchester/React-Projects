import React from 'react';
import'../styles/Navbar.css'
import logo from '/public/assets/airbnb-logo.png'
export default function Navbar(){
  return(
    <div className="nav">
    <img src={logo} />
    </div>
    
  )
}