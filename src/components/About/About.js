import React from "react";
import momen from "../../images/Momen.JPG";
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row shadow-lg p-5">
          <div className="col-md-6">
            <h2> I'm Mohammad Abdul Momen</h2>
            <p>
              Currently Studying Computer science and engineering at a private
              university in Dhaka. My goal is to be a Full stack web Developer.i
              already gained skills on wordpress,Wix and Shopify CMS.currently
              i'm learning HTML,CSS,JAVASCRIPT,React ,Bootstrap, Tailwind. 
            </p>
          </div>
          <div className="col-md-6 ">
            <img className="img-fluid" src={momen} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
