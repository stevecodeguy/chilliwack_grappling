import React from 'react';

import './schedule.css';

export default function schedule() {
  return (
    <div className='scheduleCenter'>
      <div>
      <h1 className='centeredText'>Schedule</h1>
        <table className='largeTable'>
          <tbody>
            <tr>
              <td>Monday</td>
              <td>Kids</td>
              <td className='centeredText'>5:30pm to 6:30pm</td>
            </tr>
            <tr>
              <td></td>
              <td>Adults</td>
              <td className='centeredText'>6:30pm to 8:00pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>Kids</td>
              <td className='centeredText'>5:30pm to 6:30pm</td>
            </tr>
            <tr>
              <td></td>
              <td>Adults</td>
              <td className='centeredText'>6:30pm to 8:00pm</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>Adults Open Mats</td>
              <td className='centeredText'>6:30pm to 8:00pm</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>Adults</td>
              <td className='centeredText'>10:00am to 11:30am</td>
            </tr>
          </tbody>
        </table>

        <table className='smallTable'>
          <tbody>
            <tr>
              <td>Mon</td>
              <td>Kids</td>
              <td className='centeredText'>5:30-6:30pm</td>
            </tr>
            <tr>
              <td></td>
              <td>Adults</td>
              <td className='centeredText'>6:30-8pm</td>
            </tr>
            <tr>
              <td>Wed</td>
              <td>Kids</td>
              <td className='centeredText'>5:30-6:30pm</td>
            </tr>
            <tr>
              <td></td>
              <td>Adults</td>
              <td className='centeredText'>6:30-8pm</td>
            </tr>
            <tr>
              <td>Thur</td>
              <td>Open Mats</td>
              <td className='centeredText'>6:30-8pm</td>
            </tr>
            <tr>
              <td>Sat</td>
              <td>Adults</td>
              <td className='centeredText'>10-11:30am</td>
            </tr>
          </tbody>
        </table>
        <h5>Closed for all holidays</h5>
      </div>
    </div>
  );
}