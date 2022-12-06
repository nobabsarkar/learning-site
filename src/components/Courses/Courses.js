import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";

const Courses = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("https://assignment-server-10-nobabsarkar.vercel.app/card")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          {cards.map((card) => (
            <h3>
              <Link to={`/carddetails/${card.id}`}>{card.name}</Link>
            </h3>
          ))}
        </div>
        {cards.map((card) => (
          <Cards key={card.id} card={card}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Courses;
