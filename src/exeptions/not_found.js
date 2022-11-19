// Handle Errors
export const notFoundExeption = (req, res, next) => {
  res.status(404).render('layout/error', {
    head_title: 'NOT FOUND',
    status_code: 404,
    message: 'NOT FOUND',
    reason: `path:"${req.path}" doesn't exists!`
  })
}