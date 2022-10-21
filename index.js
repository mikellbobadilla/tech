import { httpServer } from './src/config/http.js'
import { env } from './src/config/env.js'

const main = () => {
  httpServer.listen(env.port, () => console.log(`Server listening on http://localhost:${env.port}`))
}

main()