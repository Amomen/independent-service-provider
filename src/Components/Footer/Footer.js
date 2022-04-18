import React from "react";

const Footer = () => {

    
    let month= new Date()
    let year = month.getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="col">
          <p className="text-center py-12 font-semibold">Copyright © {year}. All rights reserved By Hasan Rifat.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
