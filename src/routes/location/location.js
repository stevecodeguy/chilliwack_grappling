import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavLocation from '../../components/navLocation/navLocation';
import MapComponent from '../../components/map/map';
import Entrance from '../../components/entrance/entrance';

import './location.css';

export default function location() {
  return (
    <div className='locationCenter'>
      <div className='locationMap'>
        <h1 className='centeredText'>Location</h1>
        <NavLocation />
        <Switch>
          <Route exact path='/location/entrance'>
            <Entrance />
          </Route>
          <Route exact path='/location'>
            <MapComponent />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

