import React, { useState, useEffect } from 'react';
import ContactDetails from '../Components/ContactDetails'
import DoctorAvailability from '../Components/DoctorAvailability';
import axios from 'axios';


export default function DoctorSchedule() {
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



  return (
    <div className="DoctorSchedule">
      <h2>Who is on duty?</h2>
      <DoctorAvailability 
        onDuty={doctorDuty}
      />
      <ContactDetails />
    </div>
  )
}