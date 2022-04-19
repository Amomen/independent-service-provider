import React, { useEffect, useState } from "react";
import Data from "../Data/Data";
import "./Home.css"
import Cards from "../Card/Cards";
import bg from "../../images/bg-image.jpg"
import Places from "../Places/Places";
const Home = () => {
  
  return (
    <div className="">
      <div className="row">
        <div className="main-bg">
            <img className="img-fluid" src={bg} alt="" />
        </div>
      </div>
      <Places></Places>
      
    </div>
  );
};

export default Home;
