import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Cards = ({ card }) => {
  const { name, picture } = card;

  return (
    <>
      <div className="col-md-3">
        <div className="border p-4 mb-5 card_image">
          <img className="w-100" src={picture} alt="" />
          <h3>{name}</h3>
          <button className="btn btn-warning btn-lg">
            <Link to={`/carddetails/${card.id}`}>Details</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
