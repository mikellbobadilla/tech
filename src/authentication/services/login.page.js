export const loginPage = (req, res) => {
  return res
    .status(200)
    .render('layout/login', { 
      head_title: 'login', 
      has_errors: true,
      error_message: ''
    })
}