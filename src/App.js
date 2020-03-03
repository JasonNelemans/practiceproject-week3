import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import DoctorSchedule from './Pages/DoctorSchedule';
import PatientSignup from './Pages/PatientSignup';
import PatientDatabase from './Pages/PatientDatabase';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/database" component={PatientDatabase} />
        <Route path="/signup" component={PatientSignup} />
        <Route path="/schedule" component={DoctorSchedule} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
