'use strict';

module.exports = {
  // 获得get 请求头header中 token 属性
  get token() {
    // 直接用get方式
    return this.get('token');
  },
};
