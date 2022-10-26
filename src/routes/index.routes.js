import { Router } from 'express'
import { renderIndexPage } from '../response_pages/index.page.js'
const indexRoutes = Router()

indexRoutes.get(['/', '/index'], (req, res, next) => {

  return res.status(200).render('index', {head_title: 'index'})
})

export { indexRoutes }