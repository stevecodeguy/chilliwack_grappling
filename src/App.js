import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/nav/nav';
import Background from './components/background/background';
import Footer from './components/footer/footer';
import LocationMap from './routes/location/location';
import ClubFees from './routes/fees/fees';
import Schedule from './routes/schedule/schedule';

import logo from './images/wrestling.svg';

import './App.css';

function App() {
  return (
    <Router>
      
      <Nav/>
    
      <Background />

      <Switch>
        <Route path='/location'>
          <LocationMap />
        </Route>
        <Route exact path='/schedule'>
          <Schedule />
        </Route>
        <Route exact path='/fees'>
          <ClubFees />
        </Route>
        <Route exact path='/'>
          <div className='logo'>
            <img src={logo} alt="Chilliwack Grappling Club logo"  />
          </div>
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

// window.addEventListener('scroll', (e) => {
//   last_known_scroll_position = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(function() {
//       doSomething(last_known_scroll_position);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });

export default App;
