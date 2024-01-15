module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['<rootDir>/**/*.{ts,tsx,js,jsx}'],
  modulePaths: ['<rootDir>/'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  transform: {
    '\\.(jpg|jpeg|png|eot|otf|webp|svg|ttf|woff|woff2|webm)$':
      'jest-transform-stub',
  },
};
