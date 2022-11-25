import { httpServer } from './src/config/http.js'
import env from './src/config/env.js'

const bootsrap = () => {
  httpServer.listen(env.PORT, () => {
    console.log(`Server listening on http://localhost:${env.PORT}`)
  })
}

bootsrap()
console.clear()