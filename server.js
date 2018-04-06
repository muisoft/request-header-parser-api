import express from 'express'
import path from 'path'

import { router } from './routes/router'

const app = express()

app.use(express.static(path.join(__dirname, 'views')))

app.use(router)

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
