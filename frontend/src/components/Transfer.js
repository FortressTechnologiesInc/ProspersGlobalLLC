import React, { useState } from "react";

export default function Transfer() {
  const [toUserId, setToUserId] = useState("");
  const [amount, setAmount] = useState("");

  const submitTransfer = async () => {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/transactions/transfer", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({ toUserId, amount })
    });

    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f5deb3", minHeight: "100vh" }}>
      <h2>Transfer Funds</h2>
      <input placeholder="Recipient User ID" onChange={(e) => setToUserId(e.target.value)} /><br /><br />
      <input placeholder="Amount" onChange={(e) => setAmount(e.target.value)} /><br /><br />
      <button onClick={submitTransfer}>Send Transfer</button>
    </div>
  );
}
