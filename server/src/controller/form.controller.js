import { pool } from "../database/db.js";
import path from 'path';
import { fileURLToPath } from "url";


const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const iniciarSesion = (req, res) => {
    res.sendFile(__dirname + "../client/src/components/page/Login.js")
}




export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password]);
    res.send({ 
        id: rows.insertId,
        username,
        email,
        password,
     });
};
