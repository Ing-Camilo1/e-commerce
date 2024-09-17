import express from 'express'
import registerRoutes from './router/form.routes.js'
const app = express()
import { pool } from './database/db.js'
import cors from 'cors'


try {
  await pool.query("SELECT 1");
  console.log("La conexion a la base de datos fue exitosa");
} catch (error) {
  console.log("La conexion tuvo un error:", error);
}

app.use(cors())
app.use(express.json())

app.use(registerRoutes)


app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint no encontrado",
  });
});


app.set("port", 4000)
app.listen(app.get("port"))
console.log('server runing on port', app.get("port"))

