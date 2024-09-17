import { Router } from "express"    
import * as L from '../controller/form.controller.js'

const router = Router()

router.post('/register', L.registerUser)
router.post('/login', L.loginUser)

export default router