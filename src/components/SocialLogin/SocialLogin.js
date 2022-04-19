import React from "react";
import Loading from "../Loading/Loading";

import { useLocation, useNavigate } from "react-router-dom";

import {
  
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import auth from "../../firebase.init";


const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, loading, googleRrror] =
    useSignInWithGoogle(auth);
  

  const handleSubmitGoogle = (event) => {
    event.preventDefault();

    signInWithGoogle();
  };

  if(loading){
    return <Loading></Loading>
  }


  
  
  if (googleUser) {
    navigate("/");
  }
  let errorElemt;
  if (googleRrror) {
    errorElemt = (
      <p>
        {" "}
        Error {googleRrror?.message} 
      </p>
    );
  }
  

  return (
    <div>
      {errorElemt}
      
      <button className="btn  bg-info w-100" onClick={handleSubmitGoogle}>
        <div className="flex bg-logo items-center justify-center">
          
          <span  className="block text-icon ml-4  text-white">Google</span>
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
