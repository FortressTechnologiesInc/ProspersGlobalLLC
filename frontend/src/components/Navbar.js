import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#b8860b",
      padding: "15px",
      display: "flex",
      justifyContent: "space-around",
      color: "white",
      fontWeight: "bold"
    }}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/transfer">Transfer</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}
