export const internalServerExeption = (req, res) => {
  res.status(500).render('layout/error', {
    head_title: '500',
    status_code: '500',
    message: 'INTERNAL SERVER',
    reason: 'Working on this!'
  })
}