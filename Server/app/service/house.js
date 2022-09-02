'use strict';

const BaseService = require('./base.js');

class HouseService extends BaseService {
  async hot() {
    return this.run(async ctx => {
      const result = await ctx.model.House.findAll({
        limit: 4,
        // eslint-disable-next-line array-bracket-spacing
        order: [['showCount', 'DESC']],
        attributes: {
          // eslint-disable-next-line array-bracket-spacing
          exclude: ['startTime', 'endTime', 'publishTime'],
        },
        include: [
          {
            model: this.app.model.Imgs,
            limit: 1,
            // eslint-disable-next-line array-bracket-spacing
            attribute: ['url'],
          },
        ],
      });

      return result;
    });
  }
}

module.exports = HouseService;
