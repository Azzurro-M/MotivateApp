import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ResetPassword.css";

export const EmailReset = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
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
        <h2> Confirm your Email!</h2>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
