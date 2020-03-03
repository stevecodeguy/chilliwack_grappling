import React from 'react';
import { NavLink } from 'react-router-dom';

import './navLocation.css'

export default function NavLocation() {
  return(
    <ul id='navLocation'>
      <NavLink to='/location' exact ><li>Map</li></NavLink>
      <NavLink to='/location/entrance' exact><li>Entry</li></NavLink>
    </ul>
  );
}