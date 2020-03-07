import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
