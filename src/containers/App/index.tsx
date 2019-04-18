import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright, faSkull } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'src/assets/styles/_main.scss';
import ErrorBoundary from 'src/components/ErrorBoundary';
import store from 'src/store';
import Layout from './Layout';
import Routes from './Routes';

library.add(faCopyright, faSkull);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <Layout>
          <Routes />
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
);

export default App;
