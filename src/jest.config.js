const paths = require('../config/paths');
const config = {
  rootDir: '../',
  transform: {
    '^.+\\.(jsx?|tsx?)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [paths.testsSetup],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/config/jest/svgrMock.js',
    '^.+\\.(css|less|scss)$': '<rootDir>/config/jest/cssMock.js',
    '^@/static/(.*)$': '<rootDir>/public/static/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\/features/\\*\\*/route.ts$': '<rootDir>/config/jest/routeMock.js',
  },
};

module.exports = config;
