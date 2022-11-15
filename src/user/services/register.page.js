export const registerPage = (req, res) => {
  return res.status(200).render('layout/register', { head_title: 'register', has_errors: false, error_message: '' })
}
