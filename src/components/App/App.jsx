import React from 'react';
import axios from 'axios';
import './App.css';

// react router
import {HashRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Complete from '../Complete/Complete';
import Home from '../Home/Home'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        
        <h4>Don't forget it!</h4>
      </header>
      <Router>

          <Route exact path = '/'><Home /></Route>
          <Route exact path = '/feeling'><Feeling /></Route>
           <Route exact path = '/understanding'><Understanding /></Route>
          <Route exact path = '/support'><Support /></Route>
          <Route exact path = '/comments'><Comments /></Route>
         <Route path = '/review'><Review /></Route>
          <Route path = '/complete'><Complete /></Route>
        </Router>
    </div>
  );
}

export default App;
