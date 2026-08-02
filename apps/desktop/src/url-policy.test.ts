import assert from 'node:assert/strict';
import test from 'node:test';

import { isHttpsUrl } from './url-policy.js';

test('HTTPS URL만 허용한다', () => {
  assert.equal(isHttpsUrl('https://ka-reer.com'), true);
  assert.equal(isHttpsUrl('http://ka-reer.com'), false);
  assert.equal(isHttpsUrl('file:///tmp/index.html'), false);
  assert.equal(isHttpsUrl('not-a-url'), false);
});
