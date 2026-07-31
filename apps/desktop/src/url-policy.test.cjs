const assert = require('node:assert/strict');
const test = require('node:test');

const { isHttpsUrl } = require('./url-policy.cjs');

test('HTTPS URL만 허용한다', () => {
  assert.equal(isHttpsUrl('https://ka-reer.com'), true);
  assert.equal(isHttpsUrl('http://ka-reer.com'), false);
  assert.equal(isHttpsUrl('file:///tmp/index.html'), false);
  assert.equal(isHttpsUrl('not-a-url'), false);
});
