import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/user/resetPassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, confirmPassword }),
      }
    );

    const data = await response.json();

    // Check if password reset was successful
    if (response.ok && data && data.message === "Password reset successful") {
      // Redirect to the login page
      alert("Password reset successful. Please login with your new password.");
      navigate("/");
    } else {
      alert("Password reset failed. Please try again.");
    }
  };

  return (
    <>
      <form className="reset-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <label>
          New Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </>
  );
};
