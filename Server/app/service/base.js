'use strict';
const Service = require('egg').Service;

class BaseService extends Service {
  run(callback) {
    const { ctx, app } = this;
    try {
      if (callback) return callback(ctx, app);
    } catch (error) {
      console.log('error:', error);
      return null;
    }
  }
}

module.exports = BaseService;
