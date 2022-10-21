/**
 * Render Page Not Found
 * @param {Response} res 
 * @returns {void}
 */
export const renderNotFoundPage = (path, res) => {
  res.status(404).render('layout/error', {
    head_title: '404',
    status_code: '404',
    message: 'NOT FOUND',
    reason: `path:"${path}" doesn't exists!`
  })
}