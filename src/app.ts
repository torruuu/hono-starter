import { OpenAPIHono } from '@hono/zod-openapi'

const app = new OpenAPIHono()

app.get('/', (c) => c.json({ message: 'Hello Hono!' }))

export default app
