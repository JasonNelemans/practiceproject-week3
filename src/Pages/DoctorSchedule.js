import React from 'react';
import ContactDetails from '../Components/ContactDetails'
import DoctorAvailability from '../Components/DoctorAvailability';



export default function DoctorSchedule() {
  return (
    <div className="DoctorSchedule">
      <h2>Who is on duty?</h2>
      <DoctorAvailability />
      <ContactDetails />
    </div>
  )
}