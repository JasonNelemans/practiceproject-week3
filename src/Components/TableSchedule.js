import React from 'react';

export default function TableSchedule(props) {
  return (
    <tr className="TableSchedule">
      <td>{props.doctor}</td>
      <td>{props.onDuty ? 'on duty' : 'off duty'}</td>
    </tr>
  )
}