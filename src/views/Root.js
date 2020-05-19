import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/twitters" component={Twitters} />
        <Route path="/articles" component={Articles} />
        <Route path="/login" component={Notes} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;