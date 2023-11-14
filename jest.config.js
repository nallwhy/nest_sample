/* eslint-disable */
const fs = require('fs');

const config = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));

module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { ...config }],
  },
  collectCoverageFrom: ['**/*.(t|j)sx?'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
