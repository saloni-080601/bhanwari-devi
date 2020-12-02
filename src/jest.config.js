module.exports = {
  preset: "jest-puppeteer",
  moduleFileExtensions: ['js', 'jsx', 'json'],
  // setupTestFrameworkScriptFile has been deprecated in
  // favor of setupFilesAfterEnv in jest 24
  setupFilesAfterEnv: ['./jest.setup.js'],
}
