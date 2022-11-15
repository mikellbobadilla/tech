import { Router } from 'express'
const router = Router()
import auth from '../controllers/auth.controller.js'

router.get('/login', auth.render)

router.post('/login', auth.authenticate)

router.get('/logout', auth.logout)

export default router