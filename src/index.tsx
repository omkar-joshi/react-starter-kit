// This will add legacy browser (ie9, ie10 and ie11) support
// Learn more about this polyfill:
// https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md
import React from 'react';
import 'react-app-polyfill/ie9';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
