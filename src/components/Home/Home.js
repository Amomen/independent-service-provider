import React, { useEffect, useState } from "react";
import Data from "../Data/Data";
import "./Home.css"
import Cards from "../Card/Cards";
import bg from "../../images/bg-image.jpg"
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("file.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="">
      <div className="row">
        <div className="main-bg">
            <img className="img-fluid" src={bg} alt="" />
        </div>
      </div>
      <div className="container">
      <div className="places">
          {data.map((img) => (
            <Cards key={img.id} img={img}></Cards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
