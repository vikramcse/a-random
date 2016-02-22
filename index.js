'use strict';

module.exports = function (array, elements) {
  var count = Number(elements) || 1;

  if (array === null) {
    throw new Error('The first argument can not be null');
  }

  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array as the first argument');
  }

  if (count > array.length) {
    throw new Error('The second argument elements must be less or equal to size of array');
  }

  var ans = [];
  array.map(function (item, index) {
    if (count === index) return;
    ans.push(array.splice(Math.floor(Math.random() * array.length), 1)[0]);
  });

  return ans;
};
