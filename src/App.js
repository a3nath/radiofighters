import logo from './logo.svg';
import React from 'react';
import {BrowerserRouter, Redirect, Route, Switch} from react-router-dom;
import {connect } from 'react-redux';

import * as actionCreators from './store/actionCreators/index';
import './App.css';
import Home from './containers/Home';
import Game from './containers/Game';
import Tutorial from './containers/Tutorial';
import Layout from './components/Layout/Layout';

const App = props =>  {

  let routes = 
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/game' component={Game}></Route>
      <Route path='/tutorial' component={Tutorial}></Route>
      <Redirect to='/'/>
    </Switch> 

  return (
    <div>
      <BrowerserRouter>
        <Layout>
          {routes}
        </Layout>
      </BrowerserRouter>
    </div>
  );
}

export default App;
