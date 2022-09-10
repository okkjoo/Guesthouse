'use strict';

const BaseService = require('./base.js');

class OrderService extends BaseService {
  async hasOrder(parmas) {
    return this.run(async ctx => {
      const res = await ctx.model.Orders.findOne({
        where: {
          userId: parmas.userId,
          houseId: parmas.houseId,
        },
      });

      return res;
    });
  }
}

module.exports = OrderService;
