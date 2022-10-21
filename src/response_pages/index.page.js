/**
 * Render the index page
 * @param {Response} res 
 * @returns {void}
 */
export const renderIndexPage = (res) => {
  res.status(200).render('index', {
    head_title: 'tech'
  })
}