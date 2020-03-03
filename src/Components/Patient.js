import React, { useState } from 'react';

export default function Patient(props) {
  const [ click, setClick ] = useState();
  
  const handleClick = () => {
    const option = click ? setClick(false) : setClick(true)
    return option
  }

  const display = click ? true : 'none'
  
  return (
    <div className="Patient" style={{border: '3px solid black', margin: '5px'}}>
      <p>Name: {props.firstName} {props.lastName} </p>
      <p>id: {props.id} </p>
      <p>date of birth: {props.dateOfBirth} </p>
      <div style={{display: display}}>
        <p>email: {props.email}</p>
        <p>phone: {props.phoneNumber}</p>
        <p>gender: {props.gender}</p>
        <p> prescriptions: {props.prescriptions} </p>
      </div>
      <button onClick={handleClick}>show details </button>
    </div>
  )
}