'use strict';
const os = require('os');
const cpus = os.cpus().length;
const platform = os.type();
const memory = Math.ceil(os.totalmem() / Math.pow(2, 30)) + 'G';
module.exports = {
  get info() {
    return {
      memory,
      platform,
      cpus,
      url: this.request.url,
    };
  },
};
