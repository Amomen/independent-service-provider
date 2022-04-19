import React, { useRef, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import "./Login.css";

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
 /*  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const emailBlur = (event) => {
    setEmail(event.target.value);
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();
    if(user){
        navigate(from, {replace:true})
    }
  const passBlur = (event) => {
    setPass(event.target.value);
  };
  const userSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email,pass)
  };
  const location=useLocation();
const from=location.state?.from?.pathname || '/'; */


  return (
    <div className="form-container">
      <div>
        <h2 className="form-title"> Please Log in</h2>
        <form onSubmit={handleSubmit} action="">
          <div className="input-group">
            <label htmlFor="email"></label>
            <input placeholder="Email" ref={emailRef} type="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="pass"></label>
            <input placeholder="Password" ref={passwordRef} type="password" name="pass" />
          </div>
          <p>{error?.message}</p>
          {
              loading && <p>Loading...</p>
          }
          <button type="submit" value="login" className="form-submit">
            Login
          </button>
        </form>
        <p>
          New to Touring ?{" "}
          <Link to="/signup" className="form-link">
            Sign Up
          </Link>
          <button className="forgot" onClick={handleForgotPassword}>Forgot pasword? </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
