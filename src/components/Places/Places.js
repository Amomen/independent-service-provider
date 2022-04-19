import React, { useEffect, useState } from 'react';
import Cards from '../Card/Cards';
import "./Places.css"
const Places = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch("file.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
    return (
        <div className="container">
      <div className="places">
          {data.map((img) => (
            <Cards key={img.id} img={img}></Cards> 
            
          ))}
        </div>
      </div>
    );
};

export default Places;