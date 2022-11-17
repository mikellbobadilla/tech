import { UserRepository } from '../repository/user.repository.js'

export const getAll = async (req, res, next) => {
  const users = await UserRepository.getAll()
  res.json({
    data: users
  })
}