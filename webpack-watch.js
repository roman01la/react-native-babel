'use strict';

var webpack = require('webpack'),
    config = require('./webpack.config.js'),
    path = require('path');

var outputOptions = {

  cached: false,
  cachedAssets: false,
  colors: require('supports-color'),
  exclude: ['node_modules']
};

var lastHash;

Error.stackTrackLimit = 30;

var reactNativeRoot = path.resolve(__dirname, 'node_modules/react-native');
var blacklist = require(path.resolve(reactNativeRoot, 'packager/blacklist'));
var reactNativePackage = require(path.resolve(reactNativeRoot, 'package'));
var DependencyGraph = require(path.resolve(__dirname,
  'node_modules/react-native/packager/react-packager/src/DependencyResolver/haste/DependencyGraph'));

var blacklistRE = blacklist(false);

var depGraph = new DependencyGraph({

  roots: [reactNativeRoot],
  ignoreFilePath: function (filepath) {

    return filepath.indexOf('__tests__') !== -1 ||
      blacklistRE.test(filepath);
  },
  fileWatcher: { on: function() {} },
  assetExts: ['png', 'jpg']
});

depGraph._loading
  .then(function() {

    return depGraph.getOrderedDependencies(reactNativePackage.main);
  })
  .then(function (deps) {

    return deps.map(function (dep) { return dep.id; });
  })
  .then(function (deps) {
    deps.push('image\\!');
    config.externals = config.externals || [];
    config.externals = config.externals.concat(deps);

    webpack(config).watch(300, function (err, stats) {

      if (err) {

        console.error(err.stack || err);
        if (err.details) console.error(err.details);
      }
      else {

        if (stats.hash !== lastHash) {

          lastHash = stats.hash;
          process.stdout.write(stats.toString(outputOptions) + '\n');
        }
      }
    });
  });

console.log('Loading native modules for the first time...');
