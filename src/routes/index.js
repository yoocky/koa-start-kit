import Router from 'koa-router';
import demo from './demo';
const router = Router()
// demo
router.use('/demo', demo.routes(), demo.allowedMethods());
// homePage
router.get('/', async (ctx, next) => {
 await ctx.render('./index', {
   title: 'homePage'
 })
});
export default router;
