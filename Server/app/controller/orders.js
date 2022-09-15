'use strict';

const BaseController = require('./base');

class OrdersController extends BaseController {
  async hasOrder() {
    const { ctx } = this;
    const res = await ctx.service.orders.hasOrder({
      userId: ctx.userId,
      houseId: ctx.params('id'),
    });

    this.success(res);
  }

  async addOrder() {
    const { ctx } = this;
    const res = await ctx.service.orders.addOrder({
      userId: ctx.userId,
      houseId: ctx.params('id'),
      isPayed: 0,
      createTime: ctx.helper.time(),
    });

    this.success(res);
  }

  async delOrder() {
    const { ctx } = this;
    const res = await ctx.service.orders.delOrder(
      ctx.params('id')
    );
    this.success(res);
  }

  async lists() {
    const { ctx } = this;
    const res = await ctx.service.orders.lists({
      ...ctx.params(),
      userId: ctx.userId,
    });

    this.success(res);
  }

  /* 用于模拟调用第三方支付 */
  async invokePay(params) {
    return {
      orderNumber: params.id + new Date().getTime(),
    };
  }

  async pay() {
    const { ctx } = this;
    const id = ctx.params('id');
    const order = await ctx.model.Orders.findByPk(id);

    if (order) {
      try {
        const beforePay = await this.invokePay({ id });
        const res = ctx.service.orders.pay({
          id,
          orderNumber: beforePay.orderNumber,
        });
        this.success(res);
      } catch (error) {
        this.error('订单支付失败');
      }
    } else {
      this.error('订单不存在');
    }
  }
}

module.exports = OrdersController;
