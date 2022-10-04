import Router from '@koa/router'
import { usersList } from './modules/users'

export const router = new Router()

router.get('/users', usersList)
