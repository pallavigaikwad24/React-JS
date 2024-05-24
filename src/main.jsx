import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "./component/Day-25/ErrorBoundary.jsx";
import { Provider } from "react-redux";
// import { store } from './component/Day-26-Redux/Redux/store.js';
import { store } from "./component/Day-27-Redux Ways/FirstWayOfRedux/store.js";

import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <Auth0Provider
      domain="dev-iwubytkzxnja2357.us.auth0.com"
      clientId="fWmJ4UXOl1SNDDRli8J6St6gpFSgsKOt"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </Auth0Provider>
  </>
  /* </React.StrictMode> */
);
