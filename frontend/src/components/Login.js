import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f5deb3", minHeight: "100vh" }}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <button onClick={submitLogin}>Login</button>
    </div>
  );
}
