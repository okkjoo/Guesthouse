/* eslint-disable array-bracket-spacing */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1643965434078_489';

  // add your middleware config here
  config.middleware = ['httpLog'];
  config.httpLog = {
    type: 'all',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.ejs = {
    delimiter: '%',
  };

  config.session = {
    key: 'ZHOU_SESS',
  };
  config.auth = {
    exclude: ['/', '/user', '/login', '/logout'],
  };
  config.mysql = {
    app: true, // 是否将mysql挂载到app下
    agent: false, // 是否挂载在代理下面
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '0000mysql',
      database: 'egg',
    },
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '0000mysql',
    database: 'egg',
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};