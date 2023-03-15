import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./css/ResetPassword.css";

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetToken, setResetToken] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `http://localhost:5000/api/user/resetpassword/${token}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, confirmPassword }),
      }
    );

    const data = await response.json();
    console.log(data);
    // Check if password reset was successful
    if (response.ok && data.success) {
      // Redirect to the login page
      alert("Password reset successful. Please login with your new password.");
      navigate("/");
    } else {
      alert("Password reset failed. Please try again.");
      console.log(data);
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
