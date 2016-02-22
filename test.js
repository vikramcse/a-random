var expect = require('chai').expect;
var getRandom = require('./index.js');

describe('Tests for checking array randomness', function () {
  it('should get 2 random elements from number array', function () {
    expect(getRandom([1, 2, 3, 4], 2).length).to.be.eql(2);
  });

  it('should get 3 random elements from string array', function () {
    expect(getRandom(['a', 'github', 'facebook', 'youtube', 'google'], 3).length).to.be.eql(3);
  });
});
