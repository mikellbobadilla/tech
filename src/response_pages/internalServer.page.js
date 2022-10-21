/**
 * Render Page Internal Server
 * @param {Response} res 
 * @returns {void}
 */
export const renderInternalServerPage = (res) => {
  res.status(500).render('layout/error', {
    head_title: '500',
    status_code: '500',
    message: 'INTERNAL SERVER',
    reason: 'Working on this!'
  })
}