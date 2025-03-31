import React, { useState } from "react";
import "../styles/auth.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="auth-container" style={{ marginTop: "100px" }}>
      <h1>Login/Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Auth;
