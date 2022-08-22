'use strict';
// eslint-disable-next-line no-unused-vars
module.exports = options => {
  return async (ctx, next) => {
    console.log('m1 start');
    await next();
    console.log('m1 end');
  };
};
