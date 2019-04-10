import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import 'src/assets/styles/_main.scss';
import store from 'src/store';
import Layout from './Layout';
import Routes from './Routes';

library.add(faCopyright);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
