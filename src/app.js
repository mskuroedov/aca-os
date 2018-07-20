import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {login, logout} from "./actions/auth";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab,faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";

library.add(fab, faGooglePlay);

const theme = createMuiTheme({
    palette: {
        primary: {main: '#00755E', secondary: '#000'},
        accent: {main: '#000', secondary: '#000'}
    },
});

const store = configureStore();

// store.dispatch(login('USERNAME', 'PASSWORD'));
store.dispatch(logout());

const jsx = (
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    </MuiThemeProvider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

// ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

setTimeout(() => {
    renderApp();
}, 100);