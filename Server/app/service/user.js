'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async lists() {
    try {
      const { app } = this;
      // const res = await app.mysql.query(
      //   'SELECT * FROM user',
      //   ''
      // );
      const res = await app.mysql.select('user');
      // console.log('SELECT', res);
      return res;
    } catch (error) {
      console.log('service/user.js/lists', error);
      return null;
    }
  }
  async detail(id) {
    return {
      id,
      name: 'zhou',
      age: 20,
    };
  }
  async detail2(id) {
    try {
      const { app } = this;
      const res = await app.mysql.get('user', { id });
      return res;
    } catch (error) {
      console.log('service/user.js/lists', error);
      return null;
    }
  }
  async add(params) {
    try {
      const { app } = this;
      const res = await app.mysql.insert('user', params);
      return res;
    } catch (error) {
      console.log('service/user.js/lists', error);
      return null;
    }
  }
  async edit(params) {
    try {
      const { app } = this;
      const res = await app.mysql.update('user', params);
      return res;
    } catch (error) {
      console.log('service/user.js/lists', error);
      return null;
    }
  }
  async delete(id) {
    try {
      const { app } = this;
      const res = await app.mysql.delete('user', { id });
      return res;
    } catch (error) {
      console.log('service/user.js/lists', error);
      return null;
    }
  }
}

module.exports = UserService;
