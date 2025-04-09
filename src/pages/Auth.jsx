import React, { useState, useEffect } from "react";
import "../styles/auth.css";
import { useAuth } from "../contexts/authcontext";
import { BsGoogle } from "react-icons/bs";
const Auth = () => {
  const { login, register, user, username, googleSignIn, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [inputUsername, setInputUsername] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      setEmail("");
      setPassword("");
      setInputUsername("");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isSignup) {
        if (!inputUsername) return setError("Username is required.");
        await register(email, password, inputUsername);
        alert("Signup successful!");
      } else {
        await login(email, password);
      }
    } catch (error) {
      const errMsg = error.message.split(":")[1] || error.message;
      setError(errMsg.trim());
    }
  };

  const handleGoogle = async () => {
    try {
      await googleSignIn();
    } catch (googleerror) {
      setError("Google Sign-In failed.");
      console.log(googleerror);
    }
  };

  if (user) {
    return (
      <div className="auth-wrapper">
        <div className="auth-box">
          <h1>Welcome back, {username || "User"}!</h1>
          <button
            onClick={logout}
            style={{
              marginTop: "30px",
              width: "100%",
              padding: "12px",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h1>{isSignup ? "Create Account" : "Welcome Back"}</h1>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Username"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
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
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <div className="extlogins">
          <button className="google-btn" onClick={handleGoogle}>
            <BsGoogle className="google-icon" />
            Continue with Google
          </button>
        </div>

        {error && <p className="error">{error}</p>}
        <p className="toggle-text">
          {isSignup ? "Already have an account?" : "New user?"}{" "}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
