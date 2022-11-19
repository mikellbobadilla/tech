import { Router } from 'express'
const indexRoutes = Router()

indexRoutes.get(['/', '/index'], (req, res, next) => {
  return res.status(200).render('index', { head_title: 'index' })
})

export default indexRoutes