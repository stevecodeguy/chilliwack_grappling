import React from 'react';
import GoogleMapReact from 'google-map-react';

import mapPin from '../../images/map-pin.png';

import './map.css';

export default function initMap() {

  const location = {
    center: {
      lat: 49.1621868,
      lng: -121.9591309
    },
    zoom: 17,
    disableDefaultUI: true
  };

  const MapLocation = ({ text }) => {
    return(
      <div className='mapPin'>
        <img src={ mapPin } alt="Map Pin" />
        <p>{text}</p>
      </div>
    );
  }

  const MapLink = 'https://www.google.com/maps/search/?api=1&query=45787+Yale+Rd,+Chilliwack,+BC+V2P+2N4&destination_place_id=ChIJW2wmm5s_hFQRbKZJc1UNm-8&travelmode=driving';

  return (
      <div id='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDIDER7YalNhOzSkfKCP-8bTgLx94dAZbw' }}
          defaultCenter={ location.center }
          defaultZoom={ location.zoom }
          disableDefaultUI={ location.disableDefaultUI }

        >
          <MapLocation
            lat={49.1627}
            lng={-121.9595}
            text='Chilliwack Submission Grappling Club'
          />
        </GoogleMapReact>
        <div id='mapInfo'>
          <div>
            <p className='visit'>Visit us at :</p>
            <a href={ MapLink } target="_blank" rel='noopener noreferrer'>
              <div className='address'>
                <p>45787 Yale Rd,</p>
                <p>Chilliwack, BC</p>
                <p>V2P 2N4</p>
              </div>
            </a>
            <p className='clickMessage'>(Click to open in Google Maps)</p>
          </div>
        </div>
      </div>
  );
}