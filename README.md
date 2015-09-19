## React Native Hot Redux Starter

This is a starter kit for building React Native apps using Redux and the react-native-webpack-server for hot reloading of code.

It's based on the BabelES6 example [here](https://github.com/mjohnston/react-native-webpack-server/tree/master/Examples/BabelES6).

## Development

```bash
npm run hot
open ./ios/react_native_starter.xcodeproj
```

Cmd+R inside Xcode to run the app in the iOS simulator. On first run, you'll likely receive an error because, in order for hot-loading to work, you need to be debugging in Chrome. Dismiss the error (press escape), then press Cmd+D and click on the Debug in Chrome button. When the Chrome debugger is open and connected, press Cmd+R in the iOS simulator to reload the app. You should not be hot-loading, and all changes you save in your source should update in the app.

## What's in it?

I'm using the starter to familiarize myself with Flux using Redux and the best practices I know of.

## Build for release

```bash
npm run bundle
```

Uncomment the line in AppDelegate.m that loads the local main.jsbundle. (Line 46.)


## Todo

[ ] Update for Android.
