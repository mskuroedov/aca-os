import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import Reboot from 'material-ui/Reboot';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {main: '#00755E',secondary:'#000'},
        accent:{main:'#000',secondary:'#000'}
    },
});
const store = configureStore();
const jsx = (
    <Reboot>
        <MuiThemeProvider theme={theme}>

            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </MuiThemeProvider>

    </Reboot>
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
    if (history.location.pathname === '/') {
        history.push('/sportsman/1');
    }
}, 1);