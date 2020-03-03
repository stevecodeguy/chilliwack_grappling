import React from 'react';

import EntranceImage from './../../images/building.png';
import BuildingDoor from './../../images/front_door.png';
import Hallway from './../../images/hall.png';
import GymDoor from './../../images/gym_door.png';

import './entrance.css';

export default function Entrance(){
  return(
    <div id='entrance'>
      <h4>How do I find your gym?</h4>
      <p>We are in the same building as Jaw Canopies. 
        Parking is available in the same lot as Jaw Canopies' customers.</p>
      <p>When facing the building, there is a door on the right hand side.</p>
      <img src={ EntranceImage } alt='Club building entrance '></img>
      <p>This is the door you want to use to enter the building.</p>
      <img src={ BuildingDoor } alt='Building Front Door'></img>
      <p>Once you enter the building, head up the stairs and turn right. You will see this hallway. Head down and turn right again.</p>
      <img src={ Hallway } alt='Hallway to gym entrance'></img>
      <p>And here's the front door to the gym!</p>
      <img src={ GymDoor } alt='Door to the Grappling Club'></img>
    </div>
  );
}