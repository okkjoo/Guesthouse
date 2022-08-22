'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/newApplication', controller.home.newApplication);
  router.get('/newContext', controller.home.newContext);
  router.post('/newContext', controller.home.newContext);
  router.get('/newRequest', controller.home.newRequest);
  router.get('/newResponse', controller.home.newResponse);
  router.get('/user', controller.user.index);
  router.get('/user/lists', controller.user.lists);
  router.get('/user/detail', controller.user.detail);
  router.get('/user/detail2/:id', controller.user.detail2);
  router.post('/user/add', controller.user.add);
  router.put('/user/edit', controller.user.edit);
  router.del('/user/del', controller.user.del);
  router.post('/login', controller.user.login);
  router.post('/logout', controller.user.logout);
  router.get('/curl/get', controller.curl.curlGet);
  router.post('/curl/post', controller.curl.curlPost);
};
