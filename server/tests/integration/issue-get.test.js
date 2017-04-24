"use strict";

var app = require('../../server');
var expect = require('expect.js');
var BlueBird = require('bluebird');
var request = require('supertest');

describe('issue /GET endpoint', function () {
  before(function () {
    return require('../../models').sequelize.sync();
  });

  if ('should return an empty list', function (done) {
    request(app).get('/api').expect(200, done);
  });
})