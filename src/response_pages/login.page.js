/**
 * Render login page
 * @param {Response} res 
 * @returns {Response}
 */
 export const renderLoginPage = (res) => {
  return res.status(200).render('layout/login', {
    head_title: 'login',
    hasNotify: false,
  })
}