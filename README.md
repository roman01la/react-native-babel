# React Native in ES6 with webpack and Babel

It's possible to write React Native apps in ES6+ using `babel-loader` and `webpack`.

Basically you need to compile everything to `index.ios.js` file, which is then transformed by `react-native`. Also, to stop webpack from trying to load native (Objective-C) components, you need to define them all as `externals` and set `libraryTarget: 'commonjs'` in webpack config, this way webpack will not resolve `require` to native components.

This example use `DependencyGraph` module from React Native to load all native modules into webpack config. It requires additional helper (`wepack-watch.js`), however it will make sure webpack is always aware of all native modules, so you don't need to keep the list up-to-date manually.

Check `webpack.config.js` for build configuration and `webpack-watch.js` to see how `DependencyGraph` module works.

## Usage

Before running the project, change code location in [`iOS/AppDelegate.m`](https://github.com/roman01la/react-native-babel/blob/dep-graph/iOS/AppDelegate.m#L29) to `localhost` to run on iOS Simulator or to your computer's IP address to run on device.
Run in the terminal `node webpack-watch` (this will load native modules for the first time, so this may take a while), open another tab and run `react-native start`.

## Known limitations

- No support for ES6 classes. There's no `React.Component` or any other extendable base class.
