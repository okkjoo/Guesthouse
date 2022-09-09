'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Orders = app.define('orders', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNumber: STRING(20),
    userId: INTEGER,
    houseId: INTEGER,
    isPayed: INTEGER,
    createTime: {
      type: DATE,
      get() {
        return new Date(
          this.getDateValue('createTime')
        ).getTime();
      },
    },
    updateTime: {
      type: DATE,
      get() {
        return new Date(
          this.getDateValue('updateTime')
        ).getTime();
      },
    },
  });

  return Orders;
};
