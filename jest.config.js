const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: false,
  collectCoverageFrom: [
    'src/app/_lib/**/*.{ts,tsx}',
    'src/app/_components/**/*.{ts,tsx}',
    '!src/**/index.ts',
  ],
  coverageReporters: ['lcov', 'text-summary'],
  coverageThreshold: {
    global: { branches: 70, functions: 65, lines: 80, statements: 80 },
  },
}

module.exports = createJestConfig(customJestConfig)
