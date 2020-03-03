import React from 'react';

import './background.css';

import upperLeft from '../../images/blue_upper_left.png';
import lowerRight from '../../images/blue_lower_right.png';

export default function background() {
  return (
    <div className="background">
      <img className="backgroundLeft" src={upperLeft} alt="Background Blue Upper Left" />
      <img className="backgroundRight" src={lowerRight} alt="Background Blue Lower Right"  />
    </div>
  );
}