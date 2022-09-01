/* eslint-disable no-unused-vars */
'use strict';
module.exports = options => {
  return async (ctx, next) => {
    // console.log('ctx.app.router', ctx.app.router);
    const flag = ctx.app.router.stack.filter(item => {
      return item.regexp.test(ctx.request.url);
    });

    if (flag.length) {
      await next();
    } else {
      ctx.body = {
        status: 404,
        errMsg: '当前接口不存在',
      };
    }
  };
};
