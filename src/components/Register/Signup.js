import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Signup = () => {
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
  const location = useLocation();
  let from = location.state?.from?.pathname;
  if (user || googleUser) {
    navigate(from, { replace: true });
  }
  const handleForgotPassword = (event) => {};
  const [signInWithGoogle, googleUser, Loading, errors] =
    useSignInWithGoogle(auth);
  /*  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth); 
  const EmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const passBlur = (event) => {
    setPassWord(event.target.value);
  };
  const confirmPassBlur = (event) => {
    setConfirmPass(event.target.value);
  };
  if (user) {
    navigate("/home");
  }

  const createUser = (event) => {
    event.preventDefault();
    if (password !== confirmPass) {
      setError("your passwords doesn't match");
      return;
    }
    if (password.length > 6) {
      setError("Password must be 6 charecters or longer");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  }; */

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title"> Sign Up </h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="email"></label>
            <input
              placeholder="Email"
              onBlur={handleEmail}
              type="email"
              name="email"
            />
          </div>
          <div className="input-group">
            <label onBlur={handleEmail} htmlFor="pass"></label>
            <input
              placeholder="password"
              onBlur={handlePassword}
              type="password"
              required
              name="pass"
            />
          </div>
          <div className="input-group">
            <label htmlFor="pass"></label>
            <input
              placeholder="confirm password"
              onBlur={handleConfirmPassword}
              type="password"
              required
              name="pass"
            />
          </div>
          <button type="submit" value="Sign Up" className="form-submit">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account ?{" "}
          <Link to="/login" className="form-link">
            Log in
          </Link>
        </p>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-primary w-50 d-block mx-auto my-2"
        >
          sign in with google
        </button>
      </div>
    </div>
  );
};

export default Signup;
