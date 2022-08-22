'use strict';

const Controller = require('egg').Controller;

class CurlController extends Controller {
  async curlGet() {
    const { ctx } = this;
    // ctx.body = 'as';

    // 得到的是“hi, egg"
    const res = await ctx.curl('http://localhost:7001/', {
      // 自动解析 JSON response
      dataType: 'text',
    });
    // console.log('curlGet_res--', res);
    ctx.body = {
      status: 200,
      data: res.data,
    };
  }
  async curlPost() {
    const { ctx } = this;
    const res = await ctx.curl('http://localhost:7001/login', {
      method: 'post',
      contentType: 'json',
      data: ctx.request.body,
      dataType: 'json',
    });
    // console.log('curlPost--', res);
    ctx.body = res.data;
  }
}

module.exports = CurlController;
