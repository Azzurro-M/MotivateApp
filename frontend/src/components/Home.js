import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home">
      <h2>
        Welcome to MOTIV<span>@</span>TE!
      </h2>
      <h3>
        Discover and share new workouts with our community of fitness addict!
      </h3>
      <div className="start-container">
        <Link to="/workouts" className="start">
          Start Working Out
        </Link>
      </div>
    </div>
  );
}
