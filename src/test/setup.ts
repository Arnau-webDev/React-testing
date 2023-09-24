import '@testing-library/jest-dom';

// tests/setup.ts
import {
	afterAll,
	afterEach,
	beforeAll,
} from 'vitest';
import { fetch } from 'cross-fetch';
  
import { server } from '../mocks/server';
  
// Add `fetch` polyfill.
global.fetch = fetch;

// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterAll(() => server.close());

// Clean up after the tests are finished.
afterEach(() => server.resetHandlers());