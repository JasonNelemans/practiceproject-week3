import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="HomePage">
      <NavLink to="/schedule" activeStyle={{fontWeight: "bold", color: "black"}} exact={true}><button>Doctor Schedule</button></NavLink>
      <NavLink to="/signup" activeStyle={{fontWeight: "bold", color: "black"}} exact={true}><button>Patient Signup</button></NavLink>
    </div>
  )
}