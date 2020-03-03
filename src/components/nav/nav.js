import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/wrestling_abbreviation.svg';
import FBLogo from '../../images/facebook_icon.svg';

import './nav.css';

const FacebookLink = 'https://www.facebook.com/Chilliwack-Submission-Grappling-382692108602824/';

export default function nav() {
  return (
    <nav>
      <div className='navLogo'>
        <NavLink to='/' exact activeClassName='' ><img src={logo} alt="Chilliwack Grappling Club logo"  /></NavLink>
      </div>
      <div className='navNoLogo'>
        <ul>
          <NavLink to='/' exact ><li>Home</li></NavLink>
          <NavLink to='/fees'><li>Club Fees</li></NavLink>
          <NavLink to='/schedule'><li>Schedule</li></NavLink>
          <NavLink to='/location'><li>Location</li></NavLink>
        </ul>
        <a href={ FacebookLink } target="_blank" rel='noopener noreferrer'>
          <li className='socialMedia'><img src={ FBLogo } alt='Facebook link for gym'></img></li>
        </a>
      </div>
    </nav>
  );
}