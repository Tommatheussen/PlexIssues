"use strict";

var app = require('../../server');
var expect = require('expect.js');
var BlueBird = require('bluebird');
var request = require('supertest');

describe('issue /GET endpoint', function () {
  before(function () {
    return require('../../models').sequelize.sync();
  });

  it ('should return an empty list', function (done) {
    request(app).get('/api/issue').expect(200, [], done);
  });

  describe('with data', function () {
    before(function () {
      this.Issue = require('../../models').Issue;

      return BlueBird.all([
        this.Issue.create({ item: 'plex', type: 'language' }),
        this.Issue.create({ item: 'Damn', type: 'quality' })
      ]);
    })

    it('should return 2 items', function (done) {
      request(app).get('/api/issue').expect(function (res) {
        expect(res.body.length).to.equal(2);
      }).end(done);
    });
  })

  describe('limited', function () {
    before(function () {
      this.Issue = require('../../models').Issue;

      return BlueBird.all([
        this.Issue.create({ item: 'item 1', type: 'language' }),
        this.Issue.create({ item: 'item 2', type: 'quality' }),
        this.Issue.create({ item: 'item 3', type: 'language' }),
        this.Issue.create({ item: 'item 4', type: 'quality' }),
        this.Issue.create({ item: 'item 5', type: 'language' }),
        this.Issue.create({ item: 'item 6', type: 'quality' }),
        this.Issue.create({ item: 'item 7', type: 'language' }),
        this.Issue.create({ item: 'item 8', type: 'quality' }),
        this.Issue.create({ item: 'item 9', type: 'language' }),
        this.Issue.create({ item: 'item 10', type: 'quality' }),
        this.Issue.create({ item: 'item 11', type: 'language' }),
        this.Issue.create({ item: 'item 12', type: 'quality' }),
        this.Issue.create({ item: 'item 13', type: 'language' }),
        this.Issue.create({ item: 'item 14', type: 'quality' })
      ]);
    });

    it('should return 10 items by default', function (done) {
      request(app).get('/api/issue').expect(function (res) {
        expect(res.body.length).to.equal(10);
      }).end(done);
    });

    it('should return 5 items when limit is requested', function (done) {
      request(app)
        .get('/api/issue')
        .query({ limit: 5 })
        .expect(function (res) {
          expect(res.body.length).to.equal(5);
        })
        .end(done);
    });
  })
})