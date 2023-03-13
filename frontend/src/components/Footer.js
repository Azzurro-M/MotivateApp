import React from "react";
import profile from "./image/profile.jpeg";
import "./css/Footer.css";

export function Footer() {
  return (
    <div>
      <footer>
        <img className="author-pic" src={profile} alt="author" />
        <h6 className="author-description">
          Created by Marianna Azzurro - Full Stack Web Developer.
        </h6>
      </footer>
    </div>
  );
}
