import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Page from '~/pages/Page';
import SearchReservation from '~/pages/SearchReservation';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SearchReservation} />

      <Route path="/page" component={Page} />

      <Route path="/" component={() => <h1>Error 404</h1>} />
    </Switch>
  );
}
