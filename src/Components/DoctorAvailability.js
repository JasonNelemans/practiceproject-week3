import React from 'react';


export default function DoctorAvailability(props) {

  const onDuty = props.onDuty
  console.log('ONDUTY: ', onDuty)

  const available = onDuty.onDuty ? 'on duty' : 'off duty'

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
            {onDuty.map(doctor => {
              return (
                <div>
                  <td>{doctor.doctor}</td>
                  <td>{available}</td>
                </div>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}