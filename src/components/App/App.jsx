import React from 'react';
import axios from 'axios';
import './App.css';

// react router
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux'

// theme
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme';

// components
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Feedback from '../Feedback/Feedback';
import Review from '../Review/Review';
import Complete from '../Complete/Complete';
import Admin from '../Admin/Admin';

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
    <ThemeProvider theme ={theme}>
    <div className='App'>
      <Nav />
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
        <Route path='/admin'><Admin /></Route>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
