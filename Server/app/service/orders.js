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
  async addOrder(parmas) {
    return this.run(async ctx => {
      const result = await ctx.model.Orders.create(parmas);
      return result;
    });
  }
  async delOrder(id) {
    return this.run(async ctx => {
      const result = await ctx.model.Orders.destroy({
        where: { id },
      });
      return result;
    });
  }
}

module.exports = OrderService;
