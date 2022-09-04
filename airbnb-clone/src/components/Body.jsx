import React from "react";
import Hero from './Hero'
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import data from "./data";
import "../styles/Body.css"
export default function Body(props) {const card = data.map((x) => {
  return <Card 
  key = {x.id}
  {...x}
  />;
});
return (
  <div className="body">
    <Navbar />
    <Hero/>

    <section className="cards-list">
              {card}
          </section>
  </div>
);
}
