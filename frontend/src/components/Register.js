import React, { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = async () => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f5deb3", minHeight: "100vh" }}>
      <h2>Create New Account</h2>
      <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} /><br /><br />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <button onClick={submitRegister}>Register</button>
    </div>
  );
}
