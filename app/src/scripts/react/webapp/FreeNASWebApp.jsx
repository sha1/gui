// Main App Wrapper
// ================
// Top level controller-view for FreeNAS webapp

"use strict";

import React from "react";

import { RouteHandler } from "react-router";

import routerShim from "../mixins/routerShim";

// WebApp Components
import BusyBox from "../components/BusyBox";
import NotificationBar from "./NotificationBar";
import ContextBar from "./ContextBar";
import PrimaryNavigation from "./PrimaryNavigation";
import DebugTools from "./DebugTools";


const FreeNASWebApp = React.createClass(
  { mixins: [ routerShim ]

  , componentDidMount: function () {
    this.calculateDefaultRoute( "/", "accounts", "is" );
  }

  , componentDidUpdate: function ( prevProps, prevState ) {
    this.calculateDefaultRoute( "/", "accounts", "is" );
  }

  , render: function () {
    return (
    <html>
      <head>
        {/* Charset Definition */}
        <meta charSet="utf-8"/>
        <title>FreeNAS 10 GUI</title>

        {/* Robot Instructions */}
        <meta name="robots" content="noindex, nofollow" />

        {/* Favicons */}
        <link
          rel   = "icon"
          type  = "image/png"
          href  = "/favicon-32x32.png"
          sizes = "32x32"
        />
        <link
          rel   = "icon"
          type  = "image/png"
          href  = "/favicon-16x16.png"
          sizes = "16x16"
        />

        {/* Primary Styles */}
        <link rel="stylesheet" type="text/css" href="/css/main.css" />
        <script type="text/javascript" src="/js/data-window-props.js"></script>
      </head>
      <body>
        {/* TODO: Add Modal mount div */}

        {/* Modal windows for busy spinner and/or FreeNAS login.
            Hidden normally except when invoked
        */}
        <BusyBox />

        {/* Header containing system status and information */}
        <NotificationBar />

        <div className="app-content">
          {/* Primary navigation menu */}
          <PrimaryNavigation />

          {/* Primary view */}
          <RouteHandler />

          {/* User-customizable component showing system events */}
          <ContextBar />
        </div>

        <footer className="app-footer">
        </footer>

        <DebugTools />

        {/* Libraries */}
        <script type="text/javascript" src="/js/libs.js"></script>

        {/* Main app code */}
        <script type="text/javascript" src="/js/app.js"></script>
      </body>
    </html>
    );
  }

  }
);

export default FreeNASWebApp;
