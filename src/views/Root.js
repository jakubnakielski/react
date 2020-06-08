import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';
import DetailsPage from 'views/DetailsPage';
import NotFoundPage from 'views/NotFoundPage';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.notes} component={Notes} />
          <Redirect exact from={routes.home} to={routes.notes} />
          <Route path={routes.note} component={DetailsPage} />

          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={DetailsPage} />

          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={DetailsPage} />

          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.register} component={RegisterPage} />

          <Route path={routes.any} component={NotFoundPage} />
        </Switch>

      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;