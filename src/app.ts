import notFound from '@/shared/middlewares/not-found.js'
import pinoLogger from '@/shared/middlewares/pino-logger.js'
import { OpenAPIHono } from '@hono/zod-openapi'
import { requestId } from 'hono/request-id'

const app = new OpenAPIHono()

app.use(requestId())
app.use(pinoLogger())

app.get('/', (c) => c.json({ message: 'Hello Hono!' }))

app.notFound(notFound)

export default app
