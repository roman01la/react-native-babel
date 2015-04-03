var webpack = require('webpack'),
    path = require('path'),
    AnybarWebpackPlugin = require('anybar-webpack');

module.exports = {

    watch: true,
    entry: path.join(__dirname, '/src/app.jsx'),
    module: {
        loaders: [
            { test: /\.(jsx|es6)$/, exclude: /node_modules/, loaders: ['babel-loader?optional=runtime'] }
        ]
    },
    output: {
        path: path.join(__dirname, '/'),
        filename: 'index.ios.js',
        libraryTarget: 'commonjs'
    },
    externals: [
      /image\!|React|ActivityIndicatorIOS|DatePickerIOS|Image|ListView|MapView|NavigatorIOS|PickerIOS|Navigator|ScrollView|SliderIOS|SwitchIOS|TabBarIOS|Text|TextInput|TouchableHighlight|TouchableOpacity|TouchableWithoutFeedback|View|WebView|AlertIOS|Animation|AppRegistry|AppStateIOS|AsyncStorage|CameraRoll|InteractionManager|LinkingIOS|LayoutAnimation|NetInfo|PixelRatio|PushNotificationIOS|PanResponder|StatusBarIOS|StyleSheet|VibrationIOS|RCTDeviceEventEmitter|NativeModules|LinkedStateMixin|cloneWithProps|update/
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new AnybarWebpackPlugin()
    ]
};
