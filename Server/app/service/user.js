'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async getUser(username) {
    try {
      const { ctx } = this;
      const result = await ctx.model.User.findOne({
        where: {
          username,
        },
      });
      console.log('result', result);
      return result;
    } catch (error) {
      console.log('service user getUser error:', error);
      return null;
    }
  }

  async add(params) {
    try {
      const { ctx } = this;
      const result = await ctx.model.User.create(params);
      return result;
    } catch (error) {
      console.log('service user add error:', error);
      return null;
    }
  }
}

module.exports = UserService;
