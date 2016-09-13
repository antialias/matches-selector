var execSync = require('child_process').execSync;
describe('package', function () {
  it('should work outside of the browser context', function () {
    execSync('node index');
  });
});
