/* eslint-disable no-unused-vars */
'use strict';
module.exports = options => {
  return async (ctx, next) => {
    const url = ctx.request.url;
    const token = ctx.request.token; // extend里的request扩展
    const username = ctx.session[ctx.username];
    const user = username ? username === token : username;
    if (!user && !options.exclude.includes(url.split('?')[0])) {
      ctx.body = {
        status: 403,
        errMsg: '用户未登录',
      };
    } else {
      await next();
    }
  };
};
