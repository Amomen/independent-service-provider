import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import Image from "../image/Photo";

const Data = () => {
  const [image, setimage] = useState([]);

    useEffect( ()=>{
        fetch('image.json')
        .then(res => res.json())
        .then(data => setimage(data));
    }, [])

    return (
        <div id="image" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our image</h1>
            <div className="image-container">
            {
                image.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Data;
