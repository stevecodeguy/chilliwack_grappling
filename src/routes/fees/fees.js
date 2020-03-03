import React from 'react';

import './fees.css';

export default function schedule() {
  return (
    <div className='feesCenter'>
      <div>
        <h1 className='centeredText'>Club Fees</h1>

        <h3 className='centeredText'>Adults</h3>
        <table>
          <tbody>
            <tr>
              <td>Monthly</td>
              <td className='centeredText'>$70 / month</td>
            </tr>
            <tr>
              <td>10 Class Punch Card</td>
              <td className='centeredText'>$80 / each</td>
            </tr>
            <tr>
              <td>Drop In</td>
              <td className='centeredText'>$10</td>
            </tr>
          </tbody>
        </table>

        <h3 className='centeredText'>Kids</h3>
          <table>
            <tbody>
              <tr>
                <td>Monthly</td>
                <td className='centeredText'>$50 / month</td>
              </tr>
              <tr>
                <td>10 Class Punch Card</td>
                <td className='centeredText'>$65 / each</td>
              </tr>
              <tr>
                <td>Drop In</td>
                <td className='centeredText'>$7</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}