import React from 'react';
import Patient from '../Components/Patient';
import axios from 'axios';

export default function PatientDatabase() {
  
  
  return (
    <div className="PatientDatabase">
      <h2>Patient Database</h2>
      <Patient />
    </div>
  )
}