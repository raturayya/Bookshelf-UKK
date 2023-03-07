import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcryptjs";
import { pool } from "../../../lib/db";
import { RowDataPacket } from "mysql2";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { username, password } = req.body;

  try {
    const conn = await pool.getConnection();

    const [result] = await conn.query<RowDataPacket[]>(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (result.length === 0) {
      // Username tidak ditemukan
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }

    const user = result[0];
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      // Password tidak cocok
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }

    conn.release();

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
