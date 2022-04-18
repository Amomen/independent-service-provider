import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = ({ service }) => {
  const { id, name, price, description, image } = service;
  const navigate = useNavigate()
  const navigateService = (id) => {
    navigate(`/service/${id}`)
  };
  return (
    <div className="col-md-4 py-5 ">
      <Card className="shadow-xl border-0 rounded-lg">
        <Card.Img variant="top" src={image} />
        <Card.Body className="p-3">
          <Card.Title className="service-normal-heading">{name}</Card.Title>
          <Card.Text className="service-normal-heading-2">
            {description}
          </Card.Text>
          <Card.Text>{price}</Card.Text>
          <Button
            onClick={() => navigateService(id)}
            variant="primary"
            className="service-btn btn"
          >
            Get Started
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetails;
