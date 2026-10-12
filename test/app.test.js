const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const app = require('../src/app');

test('GET /health returns HTTP 200', async () => {
  const response = await request(app).get('/health');

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, {
    status: 'ok',
    service: 'devsecops-api'
  });
});

test('GET /api/hello returns correct message', async () => {
  const response = await request(app).get('/api/hello');

  assert.equal(response.status, 200);
  assert.equal(
    response.body.message,
    'Hello from my DevSecOps pipeline!'
  );
});

test('Unknown routes return HTTP 404', async () => {
  const response = await request(app).get('/invalid');

  assert.equal(response.status, 404);
});
