import app from '@/app.js'
import { PORT } from '@/config.js'
import { serve } from '@hono/node-server'

serve({
  fetch: app.fetch,
  port: Number(PORT),
})

console.log(`Server is running on port ${PORT}`)
