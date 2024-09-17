import { pool } from "../database/db.js";

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password]
  );
  if (rows.length > 0) {
    res.status(200).send({ data: rows, message: "credenciales encontradas" }); 
  } else {
    res.status(404).send({ message: "credenciales no encontradas" });
  }
};

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password]
  );
  res.status(201).send({
    id: rows.insertId,
    username,
    email,
    password,
  });
};