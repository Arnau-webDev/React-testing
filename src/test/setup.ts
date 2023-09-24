import '@testing-library/jest-dom';

// tests/setup.ts
import {
	afterAll,
	afterEach,
	beforeAll,
} from 'vitest';
import { fetch, Headers, Request, Response } from 'cross-fetch';
  
import { server } from '../mocks/server';
  
// Add `fetch`and other necessary polyfills
global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterAll(() => server.close());

// Clean up after the tests are finished.
afterEach(() => server.resetHandlers());