import React from 'react';
import axios from 'axios';
import './App.css';

// react router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux'

// components
import Review from '../Review/Review';
import Complete from '../Complete/Complete';
import Home from '../Home/Home'
import Feedback from '../Feedback/Feedback'

function App() {

  const store = useSelector(store => store);

  /* data for use in map function below */
  const feedbacks = [
    {
      id: 1,
      name: 'feeling',
      prev: '',
      next: 'understanding',
      header: 'How are you feeling today?',
      numbered: true
    },
    {
      id: 2,
      name: 'understanding',
      prev: 'feeling',
      next: 'support',
      header: 'How well are you understanding the content?',
      numbered: true
    },
    {
      id: 3,
      name: 'support',
      prev: 'understanding',
      next: 'comments',
      header: 'How well are you being supported?',
      numbered: true
    },
    {
      id: 4,
      name: 'comments',
      prev: 'support',
      next: 'review',
      header: 'Any comments you want to leave?',
      numbered: false
    }

  ]


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>

        <h4>Don't forget it!</h4>
        {JSON.stringify(store)}
      </header>
      <Router>

        <Route exact path='/'><Home /></Route>
        {/* the three 1-5 ratings are very similar, so refactored into a single component with different props */}
        {/* update: further refactored to include the comments component */}
        {feedbacks.map(feedback => {
          return (<Route exact path={`/${feedback.name}`}>
            <Feedback
              key={feedback.id}
              name={feedback.name}
              prev = {feedback.prev}
              next={feedback.next}
              header={feedback.header}
              numbered={feedback.numbered}
            /></Route>)
        })}
        <Route path='/review'><Review /></Route>
        <Route path='/complete'><Complete /></Route>
      </Router>
    </div>
  );
}

export default App;
