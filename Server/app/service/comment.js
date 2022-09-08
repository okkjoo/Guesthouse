'use strict';

const BaseService = require('./base.js');

class CommentService extends BaseService {
  async add(params) {
    return this.run(async ctx => {
      const result = await ctx.model.Comment.create(params);
      return result;
    });
  }

  async lists(params, userId) {
    return this.run(async ctx => {
      const result = await ctx.model.Comment.findAll({
        where: { houseId: params.id, userId },
        limit: params.pageSize,
        offset: (params.pageNum - 1) * params.pageSize,
        include: {
          model: this.app.model.User,
          // eslint-disable-next-line array-bracket-spacing
          attributes: ['avatar', 'username'],
        },
      });
      return result;
    });
  }
}

module.exports = CommentService;
