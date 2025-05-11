import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const fakeUser = { email: "selvakumar2213@gmail.com", password: "123456" };

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === fakeUser.email && password === fakeUser.password) {
      setUser(true);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <p >
            Don't have an account?{" "}
            <Link to="/signup" >
              Sign up
            </Link>
          </p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
