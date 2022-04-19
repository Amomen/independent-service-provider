import React from "react";
import Login from "../Login/Login";
import "./Cards.css";

const Cards = ({ img }) => {
  const { image, name, rating } = img;
  return (
    <div className="product-image ">
      <img src={image} alt="" />
      <p>{name}</p>
      <button  className="btn-btn-dark btn-lg button ms-auto ">
        Have a tour
      </button>
    </div>
  );
};

export default Cards;
