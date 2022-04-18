import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="container hero-main">
        <div className="row d-flex justify-center items-center h-screen w-full">
          <div className="col-md-6">
            <div className="hero-info">
              <h4 className="hero-text mb-4">For a Better Future</h4>
              <h2 className="hero-heading  mb-4 text-white">Education for Life</h2>
              <h2 className="hero-heading2 mb-4 font-semibold text-white">
                With Frank Castle
              </h2>
              <button className="hero-btn btn">Register</button>
            </div>
          </div>
          <div className="hidden md:block col-md-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
