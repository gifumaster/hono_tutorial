import { Hono } from 'hono'
import { logger } from 'hono/logger'
import authRoutes from './routes/auth'
import avatarRoutes from './routes/avatar'
const app = new Hono()

app.use('*',logger());

app.get('/test', (c) => c.json({"message": 'Hono!'}))
app.route('/auth', authRoutes)
app.route('/avatars',avatarRoutes)
export default app