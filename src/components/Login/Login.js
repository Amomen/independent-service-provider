import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import Loading from "../Loading/Loading"
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css"


import "./Login.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
  useSignInWithEmailAndPassword(auth);
const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";

const emailRef = useRef("");
const passwordRef = useRef("");

const handleSubmit = (event) => {
  event.preventDefault();
  const email = emailRef.current.value;
  const password = passwordRef.current.value;

  signInWithEmailAndPassword(email, password);
};

if (loading || sending) {
  return <Loading></Loading>;
}

if (user) {
  navigate(from, { replace: true });
}

const handleForgotPassword = async () => {
  const email = emailRef.current.value;
  if (email) {
    await sendPasswordResetEmail(email);
    toast("Sent email");
  }
  else{
    toast("enter your email address");
  }
};

let errorElement;

if (error) {
  errorElement = <p className="text-danger"> Error {error?.message}</p>;
} else {
  errorElement = "";
}
  return (
    <section className="py-48">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="w-50 mx-auto">
              <h2 className="text-center py-3">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    ref={emailRef}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3 " controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    className="w-100 input-filled"
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <div>
                  <button
                    className="link-btn underline py-2 w-6/12 text-xs"
                    onClick={handleForgotPassword}
                  >
                    Forgot Your Password ?
                  </button>
                  <button className="link-btn py-2 w-6/12 text-xs">
                    Don't have an account yet?{" "}
                    <Link
                      to="/register"
                      className="font-semibold text-indigo-700"
                    >
                      Sign up for free
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
              <p className="py-3 text-center">{errorElement}</p>
              
              <SocialLogin />
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div className="form-container">
    //   <div>
    //     <h2 className="form-title"> Please Log in</h2>
    //     <form onSubmit={handleSubmit} action="">
    //       <div className="input-group">
    //         <label htmlFor="email"></label>
    //         <input
    //           placeholder="Email"
    //           ref={emailRef}
    //           type="email"
    //           name="email"
    //         />
    //       </div>
    //       <div className="input-group">
    //         <label htmlFor="pass"></label>
    //         <input
    //           placeholder="Password"
    //           ref={passwordRef}
    //           type="password"
    //           name="pass"
    //         />
    //       </div>
    //       <p>{error?.message}</p>
    //       {loading && <p>Loading...</p>}
    //       <button type="submit" value="login" className="form-submit">
    //         Login
    //       </button>
    //     </form>
    //     <p>
    //       New to Touring ?{" "}
    //       <Link to="/signup" className="form-link">
    //         Sign Up
    //       </Link>
    //       <button className="forgot" onClick={handleForgotPassword}>
    //         Forgot pasword?{" "}
    //       </button>
    //     </p>
    //     <button
    //       onClick={() => signInWithGoogle()}
    //       className="btn btn-primary w-50 d-block mx-auto my-2"
    //     >
    //       sign in with google
    //     </button>
    //   </div>
    // </div>
  );
};

export default Login;
