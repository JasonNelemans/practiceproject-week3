import React, { useState, useEffect } from 'react';
import Patient from '../Components/Patient';
import axios from 'axios';

function sortByName(patientA, patientB){
  return patientA.lastName.localeCompare(patientB.lastName)
}

  export default function PatientDatabase() {
    const [ patientList, setPatientList ] = useState([]);
    const [ loading, setLoading ] = useState();
    const [ sortBy, setSortBy ] = useState('all');
    const [ doctor, setDoctor ] = useState()
    
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

    const fetchDoctor = async () => {
      try {
        const response = await axios.get(
          'https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors')
          setDoctor(response.data)
      }
      catch (error) {
        console.log('error: ', error.message)
      }
    }
    
    useEffect(() => {
      fetchDoctor();
    }, [])

    
    const changeSorting = (event) => {
      setSortBy(event.target.value)
    };
    
    let sortedPatients = [...patientList].sort(sortByName);

    let filterById;
    filterById = sortedPatients.filter(patient => {
      if(sortBy === 'all') {
        return filterById = sortedPatients
      } else {
        return patient.doctorId === Number(sortBy)
      }
    });
    
    const renderedDoctor = doctor || []

    return (
      <div className="PatientDatabase">
        <h2>Patient Database</h2>
        <label><strong>Doctor</strong></label>
        <select onChange={changeSorting}>
          <option value="all">All</option>
          {renderedDoctor.map(doctor => {
            return (
              <option key={doctor.id} value={doctor.id}>{doctor.doctor}</option>
            )
          })}
        </select>
        <h3>{loading}</h3>
        {filterById.map(patient => {
          return (
            <Patient
            {...patient}
            key={patient.id}
            />
          )
        })}
      </div>
    )
  }