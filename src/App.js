import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import * as actionCreators from './store/actionCreators/index';
import Home from './containers/Home';
import Game from './containers/Game';
import Tutorial from './containers/Tutorial';
import Layout from './components/Layout/Layout';


const App = props =>  {

  let routes = 
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/game' component={Game}/>
      <Route path='/tutorial' component={Tutorial}/>
      <Redirect to='/'/>
    </Switch> 

  return (
    <div>
      <BrowserRouter>
        <Layout/>
          {routes}
      </BrowserRouter>
    </div>
  );
}


export default connect(null)(App);
