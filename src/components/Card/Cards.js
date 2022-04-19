import React from "react";
import "./Cards.css";

const Cards = ({ img }) => {
  const { image, name, rating } = img;
  return (
    <div className="product-image">
      <img src={image} alt="" />
    </div>
  );
};

export default Cards;
