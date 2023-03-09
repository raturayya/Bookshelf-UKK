import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";
import { pool } from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { username, password, isadmin } = req.body;

  const hashedPassword = await hash(password, 10);

  try {
    const conn = await pool.getConnection();

    const result = await conn.query(
      "INSERT INTO users (username, password, isadmin) VALUES (?, ?, ?)",
      [username, hashedPassword, isadmin]
    );

    conn.release();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
