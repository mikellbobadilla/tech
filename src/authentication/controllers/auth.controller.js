import { auth } from '../services/authentication.js'
import { loginPage } from '../services/login.page.js'
import { logout } from '../services/logout.js'

export default {
  authenticate: auth,
  render : loginPage,
  logout : logout
}