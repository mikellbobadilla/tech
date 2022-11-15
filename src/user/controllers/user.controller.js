import { createUser } from '../services/create.js'
import { getAll } from '../services/get.users.js'
import { registerPage } from '../services/register.page.js'

export default {
  render: registerPage,
  create: createUser,
  getAll: getAll,
  get: (req, res) => res.json({ message: 'holi,  soy el get de user' }),
  update: (req, res) => res.json({ message: 'holi,  soy el update de user' }),
  delete: (req, res) => res.json({ message: 'holi,  soy el delete de user' })
}