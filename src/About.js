import "./App.css";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
function About() {
  const location = useLocation();
  const history = useNavigate();
  console.log("Location : ", location);
  const path = history(-1);
  console.log("History : ", path);
  return (
    <div>
      <h1>About Page</h1>

      <button onClick={() => history(-1)}>Go Back</button>
    </div>
  );
}

export default About;
