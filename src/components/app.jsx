import React from "react";
import { getDevice } from "framework7/lite-bundle";
import { f7, f7ready, App, View } from "framework7-react";
import cordovaApp from "../js/cordova-app";

import routes from "../js/routes";
import store from "../js/store";
import { DarkThemeProvider } from "../context/ThemeContext";
import ThemeWrapper from "./Theme/ThemeWrapper";

const MyApp = () => {
  const device = getDevice();
  // Framework7 Parameters
  const f7params = {
    name: "The Burning Door", // App name
    theme: "aurora", // Automatic theme detection

    id: "com.theburningdoor.app", // App bundle ID
    // App store
    store: store,
    // App routes
    routes: routes,

    // Input settings
    input: {
      scrollIntoViewOnFocus: device.cordova && !device.electron,
      scrollIntoViewCentered: device.cordova && !device.electron,
    },
    // Cordova Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
    view: {
      browserHistory: true,
      browserHistorySeperator: "#",
    },
  };

  f7ready(() => {
    // Init cordova APIs (see cordova-app.js)
    if (f7.device.cordova) {
      cordovaApp.init(f7);
    }

    // Call F7 APIs here
  });

  return (
    <DarkThemeProvider>
      <App {...f7params}>
        <ThemeWrapper>
          {/* Your main view, should have "view-main" class */}
          <View main className="safe-areas" url="/" />
        </ThemeWrapper>
      </App>
    </DarkThemeProvider>
  );
};
export default MyApp;
