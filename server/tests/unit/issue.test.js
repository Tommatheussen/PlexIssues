'use strict';

var expect = require('expect.js');

describe('models/issue', function () {
  before(function () {
      return require('../../models').sequelize.sync();
  });

  beforeEach(function () {
    this.Issue = require('../../models').Issue;
  });

  describe('create', function () {
    it('creates a issue', function () {
      return this.Issue.create({ item: 'plex', type: 'language' }).bind(this).then(function (issue) {
        expect(issue.status).to.equal('new');
      });
    });
  });
});