const controller = {}
controller.page = async (ctx, next) => {
  await ctx.render('./demo/page', {
    title: 'demo page'
  })
}
export default controller
