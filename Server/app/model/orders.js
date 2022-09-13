'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Orders = app.model.define('orders', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_number: STRING(20),
    userId: INTEGER,
    houseId: INTEGER,
    isPayed: INTEGER,
    createTime: {
      type: DATE,
      get() {
        return new Date(
          this.getDataValue('createTime')
        ).getTime();
      },
    },
    updateTime: {
      type: DATE,
      get() {
        return new Date(
          this.getDataValue('updateTime')
        ).getTime();
      },
    },
  });

  /* 通过 house 连接 imgs */
  Orders.associate = () => {
    app.model.Orders.belongsTo(app.model.House, {
      foreignKey: 'houseId',
      as: 'house',
    });
  };

  return Orders;
};
