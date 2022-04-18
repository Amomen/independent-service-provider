import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Register = () => {
  const [email, setEmail] = useState("");
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
  };
  const handleSubmit = () => {};

  let errorElement;

  if (error) {
    errorElement = <p className="text-danger"> Error {error?.message}</p>;
  } else {
    errorElement = "";
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/");
  }
  const handleForgotPassword = (event) => {};
  return (
    <section className="py-48">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="w-50 mx-auto">
              <h2 className="text-center py-3">Register</h2>
              <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    onBlur={handleEmail}
                    type="email"
                    placeholder="Enter email"
                    required
                    name="email"
                  />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    onBlur={handlePassword}
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                  />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    name="confirm-password"
                    className="w-100 input-filled"
                    onBlur={handleConfirmPassword}
                    type="password"
                    placeholder="Confirm Password"
                    required
                  />
                </Form.Group>
                <div>
                  <button className="link-btn py-2 w-6/12 ">
                    Already have an account ?{" "}
                    <Link to="/Login" className="font-semibold text-indigo-700">
                      Log in
                    </Link>
                  </button>
                </div>
                <Button
                  className="mx-auto my-4 d-block w-75 service-btn btn"
                  // onBlur={handleSubmit}
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
              <div className="flex items-center w-full py-5">
                <div className="divider"></div>
                <p className="text">Or Register-in-with</p>
                <div className="divider"></div>
              </div>
              <p className="py-3 text-center">{errorElement}</p>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
