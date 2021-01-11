module.exports = (config) => {
  config.set({
    basePath: '../',
    files: [
      { pattern: 'src/data.json', included: false, served: true },
      { pattern: 'src/images/**', included: false, served: true },
      'src/lib/*.js',

      'test/init.js',

      'src/index.js',

      'test/**/*.js',
    ],
    proxies: {
      '/src/data.json': '/base/src/data.json',
      '/images/': '/base/src/images/',
    },
    frameworks: ['mocha', 'chai', 'jquery-3.4.0'],
    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    singleRun: true,
    port: 9876,
  });
};
