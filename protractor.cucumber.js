exports.config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    './demo/e2e/features/*.feature' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    require: [
      './demo/e2e/step_definitions/*.steps.ts' // accepts a glob
    ]
  }
};
