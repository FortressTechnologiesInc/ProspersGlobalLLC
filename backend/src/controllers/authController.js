import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { Account } from "../models/Account.js";
import { db } from "../config/db.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
  const userId = await User.create(db, { name, email, passwordHash });

  await Account.create(db, userId);

  res.json({ message: "User registered successfully", userId });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findByEmail(db, email);
  if (!user) return res.status(404).json({ error: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, "SECRET_KEY", { expiresIn: "1d" });

  res.json({ token });
};
