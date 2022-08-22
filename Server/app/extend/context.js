'use strict';
module.exports = {
  // get、post 通用的 查询参数方法
  params(key) {
    // 这里面的 this 就是 ctx
    const method = this.request.method;
    if (method === 'GET') {
      return key ? this.query[key] : this.query;
    }
    return key ? this.request.body[key] : this.request.body;
  },
};
