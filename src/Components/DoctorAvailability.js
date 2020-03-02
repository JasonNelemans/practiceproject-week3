import React from 'react';
import axios from 'axios';

export default function DoctorAvailability(props) {
  return (
    <div className="DoctorAvailibility">
      <table>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>availability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.doctor}</td>
            <td>{props.onDuty}</td>
          </tr>
          <tr>
            <td>Body content 1</td>
            <td>Body content 2</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Footer content 1</td>
            <td>Footer content 2</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}