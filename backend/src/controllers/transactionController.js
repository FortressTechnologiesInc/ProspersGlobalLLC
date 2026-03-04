import { Account } from "../models/Account.js";
import { Transaction } from "../models/Transaction.js";
import { db } from "../config/db.js";

export const credit = async (req, res) => {
  const { amount } = req.body;
  const account = await Account.getByUser(db, req.user.id);

  await Account.updateBalance(db, account.id, amount);
  await Transaction.create(db, { accountId: account.id, type: "CREDIT", amount });

  res.json({ message: "Credit successful" });
};

export const debit = async (req, res) => {
  const { amount } = req.body;
  const account = await Account.getByUser(db, req.user.id);

  await Account.updateBalance(db, account.id, -amount);
  await Transaction.create(db, { accountId: account.id, type: "DEBIT", amount });

  res.json({ message: "Debit successful" });
};

export const transfer = async (req, res) => {
  const { toUserId, amount } = req.body;

  const fromAcc = await Account.getByUser(db, req.user.id);
  const toAcc = await Account.getByUser(db, toUserId);

  await Account.updateBalance(db, fromAcc.id, -amount);
  await Account.updateBalance(db, toAcc.id, amount);

  await Transaction.create(db, { accountId: fromAcc.id, type: "TRANSFER_OUT", amount });
  await Transaction.create(db, { accountId: toAcc.id, type: "TRANSFER_IN", amount });

  res.json({ message: "Transfer successful" });
};
