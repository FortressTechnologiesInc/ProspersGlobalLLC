import mysql from "mysql2/promise";

export const db = await mysql.createPool({
  host: "mysql",
  user: "root",
  password: "admin123",
  database: "prospers_fintech",
  waitForConnections: true,
  connectionLimit: 20,
});
