import React from "react";
import "./css/Home.css";
import { IntroVideos } from "./IntroVideos";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <h1>
        MOTIV<span>@</span>TE
      </h1>
      <h2>Warm Up With One Of Our Intro Videos!</h2>
      <IntroVideos />
      <div className="link-container">
        <h2>Enter the community & start sharing your workouts!</h2>
        <Link className="link" to="/Community">
          Enter The Community Room Here!
        </Link>
      </div>
      <div className="link-container">
        <h2>Sport Event & Activities Calendar!</h2>
        <Link className="link" to="/Community">
          Sign Up To One Of Our Events!
        </Link>
      </div>
    </div>
  );
};
