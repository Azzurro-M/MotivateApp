import React from "react";
import profile from "./image/profile.jpeg";
import "./css/Footer.css";

export function Footer() {
  return (
    <div>
      <footer>
        <img className="author-pic" src={profile} alt="author" />
        <h5 className="author-description">
          Created by Marianna Azzurro - Full Stack Web Developer.
        </h5>
      </footer>
    </div>
  );
}
