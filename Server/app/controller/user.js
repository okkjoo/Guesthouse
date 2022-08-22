/* eslint-disable array-bracket-spacing */
'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  encode(str = '') {
    return new Buffer(str).toString('base64');
  }
  decode(str = '') {
    return new Buffer(str, 'base64').toString;
  }
  async index() {
    const { ctx } = this;

    // 获取session
    // eslint-disable-next-line no-unused-vars
    const userSession = ctx.session.user;
    // console.log('userSession', userSession);

    ctx.cookies.set('zh', '中文', {
      encrypt: true,
    });
    const zh = ctx.cookies.get('zh', {
      encrypt: true,
    });
    ctx.cookies.set('base64', this.encode('中文base64'));
    // eslint-disable-next-line no-unused-vars
    const base64 = this.decode(ctx.cookies.get('base64'));
    // console.log('base64', base64);

    // console.log(zh);
    // ctx.body = 'hi, user index';
    const user = ctx.cookies.get('user');
    await ctx.render(
      'user.html',
      {
        id: 100,
        name: 'admin',
        lists: ['java', 'php'],
        user: user ? JSON.parse(user) : null,
        zh,
      },
      {
        delimiter: '%',
      }
    );
  }
  async login() {
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.cookies.set('user', JSON.stringify(body), {
      maxAge: 1000 * 60,
    });

    // 保存 session
    ctx.session.user = body;

    ctx.body = {
      status: 200,
      data: body,
    };
  }
  async logout() {
    const { ctx } = this;
    ctx.cookies.set('user', null);
    ctx.session.user = null;
    // console.log('llllogout', ctx.session);
    ctx.body = {
      status: 200,
    };
  }
  async lists() {
    // eslint-disable-next-line no-unused-vars
    const { ctx, app } = this;
    // console.log('app.mysql.query--------', app.mysql.query);
    // await new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 1500);
    // });

    // egg-mysql
    // const res = await ctx.service.user.lists();

    // sequelize
    const res = await ctx.model.User.findAll({
      // where: { id: 1 }, // 选择条件
      // limit: 2, // 分页：每一页限制一条数据
      offset: 0, // 偏移量
    });
    ctx.body = res;
  }
  async detail() {
    const { ctx } = this;
    // eslint-disable-next-line no-unused-vars
    const res = await ctx.service.user.detail(10);

    // console.log(res);
    ctx.body = res;
  }
  async detail2() {
    const { ctx } = this;
    // egg
    // const res = await ctx.service.user.detail2(ctx.params.id);
    // sequelize
    const res = await ctx.model.User.findByPk(ctx.params.id);
    ctx.body = res;
  }
  async add() {
    const { ctx } = this;
    // const rule = {
    //   name: { type: 'string' },
    //   age: { type: 'number' },
    // };
    // ctx.validate(rule);
    // egg-mysql
    // const res = await ctx.service.user.add(ctx.request.body);

    // sequelize
    const res = await ctx.model.User.create(ctx.request.body);
    // ctx.body = { status: 200, data: ctx.request.body };
    ctx.body = { status: 200, data: res };
  }
  async edit() {
    const { ctx } = this;
    // const res = await ctx.service.user.edit(ctx.request.body);
    // 先判断该id是否存在
    const user = await ctx.model.User.findByPk(
      ctx.request.body.id
    );
    if (!user) {
      ctx.body = { status: 404, errMsg: 'id not finded' };
      return;
    }
    const res = user.update(ctx.request.body);
    ctx.body = { status: 200, data: res };
  }
  async del() {
    const { ctx } = this;
    // egg-mysql
    // const res = ctx.service.user.delete(ctx.request.body.id);

    // sequelize
    // 先判断该id是否存在
    const user = await ctx.model.User.findByPk(
      ctx.request.body.id
    );
    if (!user) {
      ctx.body = { status: 404, errMsg: 'id not finded' };
      return;
    }
    const res = user.destroy(ctx.request.body.id);
    ctx.body = { status: 200, data: res };
  }
}

module.exports = UserController;
