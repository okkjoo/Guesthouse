'use strict';

const BaseController = require('./base');

class HouseController extends BaseController {
  async hot() {
    const { ctx } = this;
    const result = await ctx.service.house.hot();
    // eslint-disable-next-line array-bracket-spacing
    this.success(result);
  }
}

module.exports = HouseController;
