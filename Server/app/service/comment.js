'use strict';

const BaseService = require('./base.js');

class CommentService extends BaseService {
  async add(params) {
    return this.run(async ctx => {
      const result = await ctx.model.Comment.create(params);
      return result;
    });
  }
}

module.exports = CommentService;
