import { serve } from '@hono/node-server'
import usersRoute from './main/user/user.route'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import {secureHeaders} from "hono/secure-headers";
import {logger} from "hono/logger";
const app = new Hono()


app.use( cors())
app.use(secureHeaders())
app.use(logger())

app.get('/api', (c) => {
  return c.json({
    "message": 'Hello world'
  })
})

app.route('/api/users', usersRoute)


const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
