import express from 'express'
import registerRoutes from './router/form.routes.js'

const app = express()

app.use(express.json())


app.use(registerRoutes)

app.set("port", 4000)
app.listen(app.get("port"))
console.log('server runing on port', app.get("port"))