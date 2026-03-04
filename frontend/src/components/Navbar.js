import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#b8860b",
        padding: "15px",
        display: "flex",
        justifyContent: "space-around",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px"
      }}
    >
      <Link style={{ color: "white", textDecoration: "none" }} to="/dashboard">Dashboard</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/transactions">Transactions</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/transfer">Transfer</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/login">Login</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/register">Register</Link>
    </nav>
  );
}
