/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import LoadingScreen from './containers/LoadingPage';
import SetupAssistantPage from './containers/SetupAssistantPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.LOADING} component={LoadingScreen} />
        <Route path={routes.SETUPASSISTANT} component={SetupAssistantPage} />
      </Switch>
    </App>
  );
}
