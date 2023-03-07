// ../../../lib/db.ts
import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const query = async (sql: string, values?: any) => {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query(sql, values);
    return results;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
};
