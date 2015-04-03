# React Native in ES6 with webpack and Babel

It's possible to write React Native apps in ES6+ using `babel-loader` and `webpack`.

Check better approach using `DependencyGraph` module: [dep-graph](https://github.com/roman01la/react-native-babel/tree/dep-graph).

Basically you need to compile everything to `index.ios.js` file, which is then transformed by `react-native`. Also, to stop webpack from trying to load native (Objective-C) components, you need to define them all as `externals` and set `libraryTarget: 'commonjs'` in webpack config, this way webpack will not resolve `require` to native components.

Here's a regexp to match all native components. Feel free to add more if I forgot any, webpack will error if not listed component will be used.

```javascript
/image\!|React|ActivityIndicatorIOS|DatePickerIOS|Image|ListView|MapView|NavigatorIOS|PickerIOS|Navigator|ScrollView|SliderIOS|SwitchIOS|TabBarIOS|Text|TextInput|TouchableHighlight|TouchableOpacity|TouchableWithoutFeedback|View|WebView|AlertIOS|Animation|AppRegistry|AppStateIOS|AsyncStorage|CameraRoll|InteractionManager|LinkingIOS|LayoutAnimation|NetInfo|PixelRatio|PushNotificationIOS|PanResponder|StatusBarIOS|StyleSheet|VibrationIOS|RCTDeviceEventEmitter|NativeModules|LinkedStateMixin|cloneWithProps|update/
```

Check `webpack.config.js` for build configuration.

## Usage

Before running the project, change code location in [`iOS/AppDelegate.m`](https://github.com/roman01la/react-native-babel/blob/master/iOS/AppDelegate.m#L29) to `localhost` to run on iOS Simulator or to your computer's IP address to run on device.
Run in the terminal `webpack --config webpack.config.js`, open another tab and run `react-native start`.

## Known limitations

- No support for ES6 classes. There's no `React.Component` or any other extendable base class.
