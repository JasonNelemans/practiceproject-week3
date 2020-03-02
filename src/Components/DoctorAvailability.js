import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableSchedule from '../Components/TableSchedule'


export default function DoctorAvailability() {
  const [ doctorDuty, setDoctorDuty ] = useState([])
  const [ loading, setLoading ] = useState()
  
  const fetchData = async () => {
    try {
      setLoading('loading...')
      const response = await axios.get(
        'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors')
        setDoctorDuty(response.data)
        setLoading('')
    }
    catch (error) {
      console.log('error: ', error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="DoctorAvailibility">
      <strong><em>{loading}</em></strong>
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