'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT, DATE } = app.Sequelize;

  // 参数:1.表名称(模型名称) 2.表字段
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(20),
    password: STRING(64),
    avatar: TEXT('long'),
    phone: STRING(20),
    sign: STRING(300),
    createTime: DATE,
    updateTime: DATE,
  });
  return User;
};
