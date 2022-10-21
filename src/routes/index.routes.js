import { Router } from 'express'
import { renderIndexPage } from '../response_pages/index.page.js'
const indexRoutes = Router()

indexRoutes.get(['/', '/index'], (req, res, next) => {
  return renderIndexPage(res)
})

export { indexRoutes }