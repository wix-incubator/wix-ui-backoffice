const create = require('stylable/dist/src/runtime').create;

const idObj = new Proxy({}, {
  get: function getter(target, key) {
    if (key === Symbol.toPrimitive) {
      return function () {
      };
    }

    if (key.match(/^\$/)) { //e.g. $cssState
      return target[key]; //use the reserved stylable functions and don't proxy
    }

    return key;
  },
  set: function setter(target, key, value) {
    return target[key] = value;
  }
});

module.exports.default = create('root', 'namespace', idObj, null, 'moduleId');
