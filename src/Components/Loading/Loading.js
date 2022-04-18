import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="w-100 h-60 flex justify-center items-center">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loading;
