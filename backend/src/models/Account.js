export const Account = {
  create: async (db, userId) => {
    await db.query(
      "INSERT INTO accounts (user_id, balance) VALUES (?, 0.00)",
      [userId]
    );
  },

  getByUser: async (db, userId) => {
    const [rows] = await db.query("SELECT * FROM accounts WHERE user_id = ?", [userId]);
    return rows[0];
  },

  updateBalance: async (db, accountId, amount) => {
    await db.query(
      "UPDATE accounts SET balance = balance + ? WHERE id = ?",
      [amount, accountId]
    );
  },
};
