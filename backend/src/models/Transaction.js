export const Transaction = {
  create: async (db, { accountId, type, amount }) => {
    await db.query(
      "INSERT INTO transactions (account_id, type, amount) VALUES (?, ?, ?)",
      [accountId, type, amount]
    );
  },

  getByAccount: async (db, accountId) => {
    const [rows] = await db.query(
      "SELECT * FROM transactions WHERE account_id = ? ORDER BY created_at DESC",
      [accountId]
    );
    return rows;
  },
};
