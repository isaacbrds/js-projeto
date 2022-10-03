import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import Router from '@koa/router'

const app = new Koa()
const router = new Router()

router.get('/', ctx => {
  ctx.body = 'hello world!!!!'
})

router.get('/users', ctx => {
  ctx.body = 'hello users!!!!'
})

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
