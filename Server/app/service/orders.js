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
  async lists(params) {
    return this.run(async (ctx, app) => {
      const res = await ctx.model.Orders.findAll({
        where: {
          isPayed: params.type,
          userId: params.userId,
        },
        limit: params.pageSize,
        offset: (params.pageNum - 1) * params.pageSize,
        include: {
          model: app.model.House,
          as: 'house',
          include: {
            model: app.model.Imgs,
            // eslint-disable-next-line array-bracket-spacing
            attributes: ['url'],
            limit: 1,
          },
        },
      });
      return res;
    });
  }
  async pay(params) {
    return this.run(async ctx => {
      const res = ctx.model.Orders.update(
        {
          isPayed: 1,
          orderNumber: params.orderNumber,
        },
        {
          where: {
            id: params.id,
          },
        }
      );
      return res;
    });
  }
}

module.exports = OrderService;
