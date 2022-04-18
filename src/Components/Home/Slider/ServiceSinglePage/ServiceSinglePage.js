// import { useState } from "react";
import { Button, Form } from "react-bootstrap";
// import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
// import auth from "../../../../firebase.init";
import SocialLogin from "../../../Login/SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ServiceSinglePage = () => {
  // const { serviceId } = useParams();
  /* const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }; */
  // const handleSubmit = () => {};

  // let errorElement;

  // if (error) {
  //   errorElement = <p className="text-danger"> Error {error?.message}</p>;
  // } else {
  //   errorElement = "";
  // }

  const handleSignUp = (event) => {
    event.preventDefault();
  };
  const handleSubmit = () => {
    toast("Thank you for your Feedback");
  };
  // if (user) {
  //   navigate("/");
  // }
  return (
    <div className="container">
      {/* <h2>welcome {serviceId}</h2> */}
      <div className="container py-44">
        <div className="row">
          <div className="col">
            <div className="w-50 mx-auto">
              <h2 className="text-center py-3">Checkout</h2>
              <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    type="text"
                    placeholder="First name"
                    name="first-name"
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    type="text"
                    placeholder="Last name"
                    name="last-name"
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    type="text"
                    placeholder="User Name"
                    name="user-name"
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    type="text"
                    placeholder="City"
                    name="City"
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    type="text"
                    placeholder="State"
                    name="State"
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    type="text"
                    placeholder="Zip"
                    name="Zip"
                  />
                </Form.Group>

                <Button
                  className="mx-auto my-4 d-block w-75 service-btn btn"
                  onClick={handleSubmit}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
                <ToastContainer />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSinglePage;
