import { Router } from 'express'
const router = Router()
import user from '../controllers/user.controller.js'

router.get('/register', user.render)

router.post('/register', user.create)

router.get('/all', user.getAll)

router.get('/:id', user.get)

router.post('/update/:id', user.update)


router.post('/delete', user.delete)

export default router