import React from 'react';
import { NavLink } from 'react-router-dom';
import ContactDetails from '../Components/ContactDetails'

export default function HomePage() {
  return (
    <div className="HomePage">
      <h1>Welcome to AMS GPs</h1>
      <ContactDetails />
      <NavLink to="/schedule" activeStyle={{fontWeight: "bold", color: "black"}} exact={true}><button>Who is on duty?</button></NavLink>
      <br />
      <br />
      <NavLink to="/signup" activeStyle={{fontWeight: "bold", color: "black"}} exact={true}><button>I am a new patient</button></NavLink>
    </div>
  )
}