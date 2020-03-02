import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="Navbar">
      <NavLink to="/" activeStyle={{fontWeight: "bold", color: "black"}} exact={true}>Home</NavLink>
    </div>
  )
}