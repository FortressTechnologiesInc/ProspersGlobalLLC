import React, { useEffect, useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loadTransactions = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/transactions/list", {
        headers: { "Authorization": `Bearer ${token}` }
      });

      const data = await res.json();
      setTransactions(data);
    };

    loadTransactions();
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f5deb3", minHeight: "100vh" }}>
      <h2>Your Transactions</h2>
      {transactions.map((t, i) => (
        <div key={i} style={{ marginBottom: "10px", padding: "10px", backgroundColor: "#fff" }}>
          <strong>{t.type}</strong> — ${t.amount}
        </div>
      ))}
    </div>
  );
}
