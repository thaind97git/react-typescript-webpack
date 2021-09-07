module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/static/(.*)$': ['<rootDir>/public/static/$1'],
    '^@/(.*)$': ['<rootDir>/src/$1'],
  },
  transformIgnorePatterns: ['<rootDir>/src/(?!(store)/)'],
};
