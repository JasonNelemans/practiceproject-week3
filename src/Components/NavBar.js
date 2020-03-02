import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="Navbar">
      <NavLink to="/home" activeStyle={{fontWeight: "bold", color: "black"}} exact={true}>Home</NavLink>
      <NavLink to="/schedule" activeStyle={{fontWeight: "bold", color: "black"}} exact={true}>Doctor Schedule</NavLink>
      <NavLink to="/signup" activeStyle={{fontWeight: "bold", color: "black"}} exact={true}>Patient Signup</NavLink>
      <NavLink to="/database" activeStyle={{fontWeight: "bold", color: "black"}} exact={true}>Patient Database</NavLink>
    </div>
  )
}