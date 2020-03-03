import React, { useState } from 'react';

export default function PatientSignup() {
  const [ firstName, setFirstName ] = useState();
  const [ lastName, setLastName ] = useState();
  const [ email, setEmail ] = useState();
  const [ phone, setPhone ] = useState();
  const [ gender, setGender ] = useState();
  const [ date, setDate ] = useState();
  const [ allData, setAllData ] = useState([]);
  const [ message, setMessage ] = useState();

  const handleFirstName = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastName = (event) => {
    setLastName(event.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleGender = (e) => {
    setGender(e.target.value)
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setAllData([...allData, {firstName, lastName, email, phone, gender, date}])
    setMessage('Thank you for submitting')
  } 

  console.log('New Patient: ', allData)
  return (
    <div className="PatientSignup">
      <h2>Patient signup</h2>
      
      <form onSubmit={handleSubmit}>
        <label>first name</label>
        <input value={firstName} onChange={handleFirstName}/> <br />
        
        <label>last name</label>
        <input value={lastName} onChange={handleLastName} /> <br />
        
        <label>email</label>
        <input value={email} onChange={handleEmail}/> <br />

        <label>phone</label>
        <input value={phone} onChange={handlePhone}/> <br />

        <label>gender</label>
        <select onChange={handleGender}>
          <option value="-">-</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select> 
        <br />

        <label>date of birth</label>
        <input type="date" onChange={handleDate}/>

        <br />
        <input type="submit" />
      </form>
      <h3>{message}</h3>
    </div>
  )
}