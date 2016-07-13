import Router from 'koa-router'
import controller from './controller'
const router = Router()
// demo page
router.get('/page', controller.page)
export default router
