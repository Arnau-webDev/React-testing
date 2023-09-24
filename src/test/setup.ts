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
  
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());