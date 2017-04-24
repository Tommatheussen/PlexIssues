'use strict';

var expect = require('expect.js');

describe('models/index', function () {
  it('returns the issue model', function () {
    var models = require('../../models');
    expect(models.Issue).to.be.ok();
  });
});