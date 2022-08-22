'use strict';
const path = require('path');
module.exports = {
  // 方法扩展
  // 获取 package.json 中的内容
  package(key) {
    const pack = getPack();
    return key ? pack[key] : pack;
  },

  // 属性扩展
  get allPackage() {
    return getPack();
  },
};

function getPack() {
  const filePath = path.join(process.cwd(), 'package.json');
  const pack = require(filePath);
  return pack;
}
