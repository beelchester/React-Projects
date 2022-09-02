import React from "react";
import "../../styles/Email.css";
import emailLogo from "../../assets/Frame 1.png"
export default function Email() {
  return (
    <a href="http://" className="email">
      <img src={emailLogo}  />
      <p>Email</p>
    </a>
  );
}
