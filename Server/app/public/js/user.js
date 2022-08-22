/* eslint-disable no-undef */
/* eslint-disable no-alert */
'use strict';

// alert('user');
// eslint-disable-next-line no-unused-vars
const login = () => {
  fetch('/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'admin',
      pwd: 'admin',
    }),
  }).then(() => {
    location.reload();
  });
};

// eslint-disable-next-line no-unused-vars
const logout = () => {
  fetch('/logout', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({}),
  }).then(() => {
    location.reload();
  });
};
