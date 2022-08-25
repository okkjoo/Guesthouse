'use strict';

// eslint-disable-next-line no-unused-vars
module.exports = option => {
  return async (ctx, next) => {
    const user = await ctx.service.user.getUser(ctx.username);
    if (!user) {
      ctx.body = {
        status: 500,
        errMsg: '用户不存在',
      };
      return;
    }
    await next();
  };
};
