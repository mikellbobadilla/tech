import { getAllUsers } from '../../database/repository/user.respository.js'

export const getAll = async (req, res, next) => {
  const users = await getAllUsers()
  res.json({
    data: users
  })
}