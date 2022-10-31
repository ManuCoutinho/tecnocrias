/** @type {import('jest').Config} */

export default {
  preset: 'ts-jest',
  coverageDirectory: 'coverage',
  collectCoverage: false,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*mock*.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
    '!**/*.d.ts',
    '!**/types.ts',
    '!src/**/*stories*.{js,jsx,ts,tsx}',
    '!<rootDir>/out/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**'
  ],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test|tests).[tj]s?(x)'
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/.dist/', '/public/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|js|tsx|jsx)$': '@swc/jest'
  }
}
