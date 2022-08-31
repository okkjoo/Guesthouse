'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Comment = app.model.define('comment', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: INTEGER,
    houseId: INTEGER,
    msg: STRING(500),
    createTime: DATE,
  });

  return Comment;
};
