import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log(data);

      // Check if authentication was successful
      if (response.ok && data && data.token) {
        // Redirect to the home page
        navigate("/Home");
      } else {
        // Redirect to the login page
        alert("Wrong Credentials");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/user/forgotpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        alert("An email has been sent to reset your password.");
        navigate("/ResetPassword");
      } else {
        alert("Failed to send reset password email.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2> Already a member?</h2>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Log in</button>
        <button className="reset" onClick={handleResetPassword}>
          Reset Password
        </button>
      </form>
    </>
  );
};
