import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Loader from 'src/components/Loader';

const Routes: React.SFC = () => (
  <Suspense fallback={<Loader animation="border" />}>
    <Switch>
      <Route path="/demo" component={lazy(() => import('../Demo'))} />
      <Route path="/" component={lazy(() => import('../Home'))} />
    </Switch>
  </Suspense>
);

export default Routes;
