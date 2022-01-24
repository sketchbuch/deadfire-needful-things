const config = {
  collectCoverageFrom: [
    "./src/**/*.ts",
  ],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ["/node_modules/", "/build/", "/dist/"]
};

module.exports = config;