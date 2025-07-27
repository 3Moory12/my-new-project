// Testing utilities setup
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import 'regenerator-runtime/runtime';

// Mocks configuration
const localStorageMock = (function() {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock IntersectionObserver
class IntersectionObserverMock {
  constructor(callback) {
    this.callback = callback;
    this.disconnect = jest.fn();
    this.observe = jest.fn();
    this.unobserve = jest.fn();
  }

  trigger(entries) {
    this.callback(entries);
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: IntersectionObserverMock,
});

// Mock ResizeObserver
class ResizeObserverMock {
  constructor(callback) {
    this.callback = callback;
    this.disconnect = jest.fn();
    this.observe = jest.fn();
    this.unobserve = jest.fn();
  }

  trigger(entries) {
    this.callback(entries);
  }
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: ResizeObserverMock,
});

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

// Global test setup
beforeAll(() => {
  // Setup global variables
  global.IS_REACT_ACT_ENVIRONMENT = true;
});

beforeEach(() => {
  // Reset mocks
  localStorageMock.clear();
  (global.fetch as jest.Mock).mockClear();
});

// Global test cleanup
afterAll(() => {
  // Cleanup
});
