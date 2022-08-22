'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/user.test.js', () => {
  it('test detail', async () => {
    const ctx = app.mockContext();
    const user = await ctx.service.user.detail(10);
    assert(user);
    assert(user.id === 10);
  });
});
