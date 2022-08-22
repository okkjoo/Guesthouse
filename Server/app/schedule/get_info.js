'use strict';

const Subscription = require('egg').Subscription;

class getInfo extends Subscription {
  // 返回一个对象，并在其中对定时任务进行配置
  static get schedule() {
    return {
      // 每三秒执行一次
      interval: 300000,
      // all:每个worker进程都会执行该定时任务; worker：指定进程执行该任务
      type: 'worker',
    };
  }
  async subscribe() {
    const info = this.ctx.info;
    console.log('subscription', info);
  }
}

module.exports = getInfo;
