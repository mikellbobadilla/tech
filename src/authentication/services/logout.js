export const logout = (req, res) => {
  res.clearCookie('jwt').redirect('/login')
}