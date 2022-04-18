import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
              <div className="flex items-center w-full py-5">
                <div className="divider"></div>
                <p className="text">Or Log-in-with</p>
                <div className="divider"></div>
              </div>
              <SocialLogin />
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
