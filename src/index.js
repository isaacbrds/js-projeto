import Koa from 'koa'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import bodyParser from 'koa-bodyparser'
import { router } from './routes'

const app = new Koa()

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(process.env.SERVER_PORT)
