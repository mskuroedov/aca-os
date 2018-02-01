import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import {login, logout} from "./actions/auth";

const theme = createMuiTheme({
    palette: {
        primary: {main: '#00755E', secondary: '#000'},
        accent: {main: '#000', secondary: '#000'}
    },
});

const store = configureStore();

store.dispatch(login('USERNAME', 'PASSWORD'));
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

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

setTimeout(() => {
    renderApp();
}, 100);