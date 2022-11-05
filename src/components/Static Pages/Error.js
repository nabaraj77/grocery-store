import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

const Error = () => {
  const navigate = useNavigate();
  const backToHomePage = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>OOPS!! 404- Page not Found.</h1>
      <div className="btn">
        <button onClick={backToHomePage}>Back to Home Page</button>
      </div>
    </div>
  );
};

export default Error;
