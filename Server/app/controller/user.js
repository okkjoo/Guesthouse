/* eslint-disable array-bracket-spacing */
'use strict';

const md5 = require('md5');
const BaseController = require('./base');

class UserController extends BaseController {
  async jwtSign() {
    const { ctx, app } = this;
    // const username = ctx.request.body.username;
    const username = ctx.params('username');
    const token = app.jwt.sign(
      {
        username,
      },
      app.config.jwt.secret
    );
    // Mark the username inside
    ctx.session[username] = token;

    return token;
  }

  parseResult(ctx, result) {
    return {
      ...ctx.helper.unPick(result.dataValues, ['password']),
      createTime: ctx.helper.timestamp(result.createTime),
    };
  }

  async register() {
    const { ctx, app } = this;
    const params = ctx.params();
    const user = await ctx.service.user.getUser(params.username);
    // console.log('user', user);
    if (user) {
      this.error('用户已存在');
      return;
    }

    const result = await ctx.service.user.add({
      ...params,
      password: md5(params.password + app.config.salt),
      createTime: ctx.helper.time(),
    });
    if (result) {
      const token = await this.jwtSign();
      this.success({
        ...this.parseResult(ctx, result),
        token,
      });
    } else {
      this.error('注册用户失败');
    }
  }

  async login() {
    // console.log('login login');
    const { ctx } = this;
    const { username, password } = ctx.params();
    const user = await ctx.service.user.getUser(
      username,
      password
    );
    // console.log('user:', user);
    if (user) {
      const token = await this.jwtSign();
      this.success({
        ...this.parseResult(ctx, user),
        token,
      });
    } else {
      this.error('该用户不存在');
    }
  }

  async detail() {
    const { ctx } = this;
    // console.log('ctx.username', ctx.username);
    const user = await ctx.service.user.getUser(ctx.username);
    console.log('user', user);
    if (user) {
      this.success({
        ...this.parseResult(ctx, user),
      });
    } else {
      this.error('该用户不存在');
    }
  }

  async logout() {
    const { ctx } = this;
    try {
      ctx.session[ctx.username] = null;
      this.success('ok');
    } catch (error) {
      this.error('退出登录失败');
    }
  }

  async edit() {
    const { ctx } = this;
    const result = ctx.service.user.edit({
      ...ctx.params(),
      updateTime: ctx.helper.time(),
    });

    this.success(result);
  }
}
module.exports = UserController;
