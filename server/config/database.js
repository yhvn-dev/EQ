import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const pool = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default pool;
