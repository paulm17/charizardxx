export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./jsdom.mocks.ts', './jest.react.ts'],
  globalSetup: './jest.setup.ts',
  moduleNameMapper: {
    '@charizardxx/(.*)': '<rootDir>/packages/@charizardxx/$1/src',
    '@charizardxx-tests/(.*)': '<rootDir>/packages/@charizardxx-tests/$1/src',
    '\\.(css)$': 'identity-obj-proxy',
    '(\\.+/.+)\\.js$': '$1',
  },
};
