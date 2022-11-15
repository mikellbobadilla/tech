export const getAll = async (req, res, next) => {
  const users = await getAllUsers()
  res.json({
    data: users
  })
}