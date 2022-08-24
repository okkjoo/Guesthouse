/* eslint-disable no-unused-vars */
'use strict';
module.exports = options => {
  console.log('option11', options);
  return async (ctx, next) => {
    const url = ctx.request.url;
    const user = ctx.session[ctx.username];
    console.log('user11', user);
    console.log('session11', ctx.session);
    if (
      !user &&
      !options.exclude.includes(ctx.request.url.split('?')[0])
    ) {
      ctx.body = {
        status: 403,
        errMsg: '用户未登录',
      };
    } else {
      await next();
    }
  };
};
