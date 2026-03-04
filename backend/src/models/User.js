export const User = {
  create: async (db, { name, email, passwordHash }) => {
    const [rows] = await db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, passwordHash]
    );
    return rows.insertId;
  },

  findByEmail: async (db, email) => {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  },
};
