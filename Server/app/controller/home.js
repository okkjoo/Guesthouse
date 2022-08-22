/* eslint-disable no-unused-vars */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(
      '-------------------------------------------------------',
      ctx.request.header['sec-ch-ua-platform']
    );
    const res = await ctx.service.user.detail(20);
    // console.log('home res', res);
    ctx.body = 'hi, egg';
  }
  async newApplication() {
    const { ctx, app } = this;
    const packageInfo = app.package('name');
    const allPackage = app.allPackage;
    ctx.body = { packageInfo, allPackage };
  }
  async newContext() {
    const { ctx } = this;
    const params = ctx.params('pwd');
    ctx.body = params;
  }
  async newRequest() {
    const { ctx } = this;
    const token = ctx.request.token;
    ctx.body = token;
  }
  async newResponse() {
    const { ctx } = this;
    const body = (ctx.response.token = 'zhoooOOO');
    const base64Body = ctx.helper.base64Encode(body);
    ctx.body = base64Body;
  }
}

module.exports = HomeController;
