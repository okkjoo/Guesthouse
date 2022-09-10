'use strict';

const BaseController = require('./base');

class OrdersController extends BaseController {
  async hasOrder() {
    const { ctx } = this;
    const user = await ctx.service.user.getUser(ctx.username);
    const res = await ctx.service.orders.hasOrder({
      userId: user.id,
      houseId: ctx.params('id'),
    });

    this.success(res);
  }
}

module.exports = OrdersController;
