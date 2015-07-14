// CLIENT ENTRYPOINT
// =================
// Counterpart to ./index.js. client provides interface to the rest of the app,
// and wraps the app's routes component.

"use strict";

require( "babel/polyfill" );

import React from "react";

// Routing
import Router, { HistoryLocation } from "react-router";
import Routes from "./routes";

import MiddlewareClient from "./websocket/MiddlewareClient";

// Initialize Global Stores
import SchemaStore from "./flux/stores/SchemaStore";

if ( typeof window !== "undefined" ) {
  window.onload = function () {
    if ( window["__TARGET_HOST__"] ) {
      let wsProtocol = ( window.location.protocol === "https:" )
                     ? "wss://"
                     : "ws://";

      MiddlewareClient.connect( wsProtocol
                              , window["__TARGET_HOST__"]
                              , ":5000/socket"
                              );
    }

    Router.run( Routes
              , HistoryLocation
              , function ( Handler, state ) {
                  React.render( <Handler />, document );
                }
              );
  };
}
