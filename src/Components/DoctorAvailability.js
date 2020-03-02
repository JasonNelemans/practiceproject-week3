import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableSchedule from '../Components/TableSchedule'


export default function DoctorAvailability(props) {
  const [ doctorDuty, setDoctorDuty ] = useState([])
  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors')
        setDoctorDuty(response.data)
    }
    catch (error) {
      console.log('error: ', error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  console.log('DOCTORDUTY: ', doctorDuty)
  // const available = onDuty.onDuty ? 'on duty' : 'off duty'
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
            {doctorDuty.map(each => {
              return (
                <TableSchedule
                  doctor={each.doctor}
                  onDuty={each.onDuty}
                  key={each.id}
                />
              )
            })}
        </tbody>
      </table>
    </div>
  )
}