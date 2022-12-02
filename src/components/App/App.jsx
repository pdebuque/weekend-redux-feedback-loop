import React from 'react';
import axios from 'axios';
import './App.css';

// react router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux'

// components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Complete from '../Complete/Complete';
import Home from '../Home/Home'
import NumberFeedback from '../NumberFeedback/NumberFeedback'

function App() {

  const store = useSelector(store => store);

  /* data for use in map function below */
  const numberFeedbacks = [
    {
      id: 1,
      name: 'feeling',
      next: 'understanding',
      header: 'How are you feeling today?'
    },
    {
      id: 2,
      name: 'understanding',
      next: 'support',
      header: 'How well are you understanding the content?'
    },
    {
      id: 3,
      name: 'support',
      next: 'comments',
      header: 'How well are you being supported?'
    }
  ]


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>

        <h4>Don't forget it!</h4>
      </header>
      <Router>

        <Route exact path='/'><Home /></Route>
        {/* the three 1-5 ratings are very similar, so refactored into a single component with different props */}
        {numberFeedbacks.map(feedback => {
          return (<Route exact path={`/${feedback.name}`}>
            <NumberFeedback
              id={feedback.id}
              name={feedback.name}
              next={feedback.next}
              header={feedback.header}
            /></Route>)
        })}
        <Route exact path='/comments'><Comments /></Route>
        <Route path='/review'><Review /></Route>
        <Route path='/complete'><Complete /></Route>
      </Router>
    </div>
  );
}

export default App;
