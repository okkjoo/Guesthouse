/* eslint-disable indent */
'use strict';
const Service = require('egg').Service;

const md5 = require('md5');

class UserService extends Service {
  async getUser(username, password) {
    try {
      const { ctx, app } = this;
      const _where = password
        ? {
            username,
            password: md5(password + app.config.salt),
          }
        : { username };
      const result = await ctx.model.User.findOne({
        where: _where,
      });
      // console.log('result', result);
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
