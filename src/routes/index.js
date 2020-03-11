import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from '~/pages/Page';
import HelloWorld from '~/pages/HelloWorld';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HelloWorld} />
      <Route path="/page" component={Page} />
    </Switch>
  );
}
