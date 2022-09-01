'use strict';

const BaseController = require('./base');

class CommonsController extends BaseController {
  async citys() {
    const citys = [
      [
        {
          label: '杭州',
          value: 'hangzhou',
        },
        {
          label: '深圳',
          value: '10002',
        },
        {
          label: '广州',
          value: '10001',
        },
      ],
    ];

    // await setTimeout(() => {
    //   citys = [
    //     { label: '广州', value: '10001' },
    //     { label: '深圳', value: '10002' },
    //   ];
    // }, 2000);
    if (citys) {
      this.success(citys);
    } else {
      this.error('获取城市信息失败');
    }
  }
}

module.exports = CommonsController;
