import { Router } from "express"    
import {registerUser, iniciarSesion} from '../controller/form.controller.js'

const router = Router()

router.post('/register', registerUser)
router.get('/', iniciarSesion)


export default router