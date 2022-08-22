'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  // 参数:1.表名称(模型名称) 2.表字段
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(20),
    pwd: STRING(50),
  });
  return User;
};
