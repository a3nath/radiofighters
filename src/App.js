import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import * as actionCreators from './store/actionCreators/artistActions';
import Home from './containers/Home/Home';
import Game from './containers/Game/Game';
import Checkout from './containers/Checkout/Checkout';
import Footer from './components/Footer/Footer'


const App = props =>  {

  let routes = 
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/game' component={Game}/>
      <Route path='/checkout' component={Checkout}/>
      <Redirect to='/'/>
    </Switch> 

  return (
    <div className='App'>
      <div className='container'>
        <BrowserRouter>
            {routes}
            <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}


export default connect(null)(App);
