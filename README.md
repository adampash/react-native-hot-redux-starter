## React Native Hot Redux Starter (deprecated)

Hot reloading is now [built into React Native](http://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html), so use that instead of this.

This is a starter kit for building React Native apps using Redux and the react-native-webpack-server for hot code reloading.

Hot reloading is based on the BabelES6 example [in @mjohnston's react-native-webpack-server](https://github.com/mjohnston/react-native-webpack-server/tree/master/Examples/BabelES6).

## Installation

```bash
git clone git@github.com:adampash/react-native-hot-redux-starter.git
cd react-native-hot-redux-starter
npm install
```

## Development

```bash
npm run hot
open ./ios/react_native_starter.xcodeproj
```

Cmd+R inside Xcode to run the app in the iOS simulator. On first run, you'll likely receive an error because, in order for hot-loading to work, you need to be debugging in Chrome. Dismiss the error (press escape), then press Cmd+D and click on the Debug in Chrome button. When the Chrome debugger is open and connected, press Cmd+R in the iOS simulator to reload the app. You should now be hot-loading, and all changes you save in your source should update in the app.

## What's in it?

I'm using the starter to familiarize myself with Flux using Redux and the best practices I know of.

## Build for release

```bash
npm run bundle
```

Uncomment the line in AppDelegate.m that loads the local main.jsbundle. (Line 46.)


## Todo

- [ ] Update for Android.

## Thanks

Many thanks to Dan Abramov for help debugging hot loading (along with all of his work that I'm using here).
