import React, { useState } from "react";
import axios from "axios";
import "./css/Register.css";
import { useNavigate, Link } from "react-router-dom";
// import registerImage from "../image/register.jpg";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(name, email, password);
      const response = await axios.post("http://localhost:5000/api/user", {
        name,
        email,
        password,
      });
      setMessage("User registered successfully!");
      alert("Please Login to confirm your new account!");
      navigate("/Login");
    } catch (error) {
      setMessage("Error registering user");
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <div className="pic">
          <h1>
            MOTIV<span>@</span>TE
          </h1>
          <h2>POST. INSPIRE. REPEAT.</h2>
          <h3>Join The Community</h3>

          {/* <img src={registerImage} alt="skateboarding" /> */}
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Register</button>
          <p>{message}</p>
          <div>
            <Link to="/login">Already a member? Sign in!</Link>
          </div>
        </form>
      </div>
    </>
  );
};
