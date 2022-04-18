import React from "react";
import "./SocialLogin.css";
import fb from "../../../images/icone/facebook-logo.png";
import google from "../../../images/icone/g.png";
import auth from "../../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, loading, googleRrror] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, FbLoading, fbError] =
    useSignInWithFacebook(auth);

  const handleSubmitGoogle = (event) => {
    event.preventDefault();

    signInWithGoogle();
  };

  if(loading || FbLoading){
    return <Loading></Loading>
  }

  if (googleUser || fbUser) {
    navigate("/home");
  }
  let errorElemt;
  if (googleRrror || fbError) {
    errorElemt = (
      <p>
        {" "}
        Error {googleRrror?.message} {fbError?.message}
      </p>
    );
  }
  const handleSubmitFacebook = (event) => {
    event.preventDefault();

    signInWithFacebook();
  };

  return (
    <div>
      {errorElemt}
      <button onClick={handleSubmitFacebook} className="btn w-50 ">
        <div className="flex bg-logo items-center justify-center">
          <img className="block w-10" src={fb} alt="" />
          <span className="block text-icon ml-4">Facebook</span>
        </div>
      </button>
      <button className="btn w-50 " onClick={handleSubmitGoogle}>
        <div className="flex bg-logo items-center justify-center">
          <img className="block w-10" src={google} alt="" />
          <span className="block text-icon ml-4">Google</span>
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
