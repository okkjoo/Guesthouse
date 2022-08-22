'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  it('user index', () => {
    return app
      .httpRequest()
      .get('/user')
      .expect(200)
      .expect('hi, user index');
  });
  it('user lists', async () => {
    await app
      .httpRequest()
      .get('/user/lists')
      .expect(200)
      .expect('[{"id":123}]');
  });
  it('user detail', async () => {
    await app
      .httpRequest()
      .get('/user/detail?id=123')
      .expect(200)
      .expect('123');
  });
  it('user detail2', async () => {
    await app
      .httpRequest()
      .get('/user/detail2/100')
      .expect(200)
      .expect('100');
  });
  it('user add post', async () => {
    await app
      .httpRequest()
      .post('/user/add')
      .send({
        name: 'zhou',
        age: 20,
      })
      .expect(200)
      .expect({
        status: 200,
        data: {
          name: 'zhou',
          age: 20,
        },
      });
  });
});
