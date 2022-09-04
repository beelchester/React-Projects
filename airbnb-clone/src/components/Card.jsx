import React from "react";
import "../styles/Card.css"
export default function Card(props) {
  
  return <div className="card">
  <img src={`../public/assets/${props.coverImg}`} />
  <div className="card--stats">
                <img src="..//assets/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span>From ${props.price}</span> / person</p>
  </div>;
}
