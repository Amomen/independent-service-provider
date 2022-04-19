import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Data = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("file.json")
        .then(res=>res.json())
        .then(data => setData(data))
    },[])
    return (
        <div>
            {
                data.map(img =><Card key={img.id} img={img} ></Card> )
            }
        </div>
    );
};

export default Data;