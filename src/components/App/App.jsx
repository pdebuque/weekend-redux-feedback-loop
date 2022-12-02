import React from 'react';
import axios from 'axios';
import './App.css';

// react router
import { Routes, Route } from 'react-router-dom';

// components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Complete from '../Complete/Complete';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <Routes>
          <Route path = '/feeling' element = {<Feeling />}></Route>
          <Route path = '/understanding' element = {<Understanding />}></Route>
          <Route path = '/support' element = {<Support />}></Route>
          <Route path = '/comments' element = {<Comments />}></Route>
          <Route path = '/review' element = {<Review />}></Route>
          <Route path = '/complete' element = {<Complete />}></Route>

        </Routes>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}

export default App;
