import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { createMuiTheme, MuiThemeProvider } from "material-ui/styles";
import { login, logout } from "./actions/auth";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

library.add(fab, faGooglePlay);

const theme = createMuiTheme({
  palette: {
    primary: { main: "#00755E", secondary: "#000" },
    accent: { main: "#000", secondary: "#000" }
  }
});

const store = configureStore();

// store.dispatch(login('USERNAME', 'PASSWORD'));
store.dispatch(logout());

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = "jss-insertion-point";

ReactDOM.render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById("app")
);
