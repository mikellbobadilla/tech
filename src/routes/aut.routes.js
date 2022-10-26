import { Router } from 'express'
import { authenticate } from '../controllers/authenticate.controller.js'
const auth = Router()

auth.get('/login', (req, res) => {
  return res.status(200).render('layout/login', {head_title: 'login', has_errors: false})
})

auth.post('/login', authenticate)

export default auth