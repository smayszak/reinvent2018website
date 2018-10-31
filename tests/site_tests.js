'use strict';

const supertest = require('supertest'); 
const test = require('unit.js');
const app = require('../app.js');

const request = supertest(app);

describe('Tests app', function() {
  it('verifies we can render home page', function(done) {
    request.get('/').expect(200).end(function(err, result) {
      test.value(result).hasHeader('content-type', 'text/html; charset=UTF-8');
      done(err);
    });
  });
});