import React, { useState, useEffect } from 'react';
import Patient from '../Components/Patient';
import axios from 'axios';

function sortByName(patientA, patientB){
  return patientA.lastName.localeCompare(patientB.lastName)
}


  export default function PatientDatabase() {
    const [ patientList, setPatientList ] = useState([]);
    const [ loading, setLoading ] = useState()
    
    const fetchList = async () => {
      try {
        setLoading('loading...')
        const response = await axios.get(
          'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients')
          setPatientList(response.data)
          setLoading('')
      }
      catch (error) {
        console.log('error: ', error.message)
      }
    }

    useEffect(() => {
      fetchList();
    }, [])

    let sortedPatients = [...patientList].sort(sortByName)



    return (
      <div className="PatientDatabase">
        <h2>Patient Database</h2>
        <h3>{loading}</h3>
        {sortedPatients.map(patient => {
          return (
            <Patient 
              firstName={patient.firstName}
              lastName={patient.lastName}
              id={patient.id}
              gender={patient.gender}
              dateOfBirth={patient.dateOfBirth}
              phoneNumber={patient.phoneNumber}
              prescriptions={patient.prescriptions}
              email={patient.email}
              key={patient.id}
            />
          )
        })}
      </div>
    )
  }